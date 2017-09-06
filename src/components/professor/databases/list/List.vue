<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <search-bar :change="changeSearchTerm"></search-bar>

    <hr />

    <icons-display
      v-show="isIconsDisplay"
     :databases="filteredDatabases">
    </icons-display>
    <list-display
      v-show="!isIconsDisplay"
     :databases="filteredDatabases">
    </list-display>

    <!--
    NOTE you have the exact same hero section in Questions.
    Pull this component out.
    -->
    <section
      class="hero"
      v-if="!filteredDatabases.length">
        <div class="hero-body">
          <h1 class="title">Whoops!!!</h1>
          <h2 class="subtitle">There are no databases containing that term.</h2>
        </div>
    </section>
  </div>

</template>

<script>
import Tabs from './Tabs'
import SearchBar from './SearchBar'
import IconsDisplay from './displays/IconsDisplay'
import ListDisplay from './displays/ListDisplay'
import eventBus from './../../../../eventBus'
import { mapGetters } from 'vuex'

export default {
  components: {
    /*
    NOTE You have the same tabs display component all around.
    Pull this component out.
    Maybe use $parent to return display type out.
     */
    'tabs': Tabs,
    'search-bar': SearchBar,
    'icons-display': IconsDisplay,
    'list-display': ListDisplay
  },

  data () {
    return {
      tab: 'iconsDisplay',
      search: ''
    }
  },

  computed: {
    ...mapGetters ({
      databases: 'databases/databases',
      questions: 'questions'
    }),

    isIconsDisplay () {
        return this.tab === 'iconsDisplay'
    },

    filteredDatabases () {
      // NOTE Give this code some style I beg you.
      // Same problem as in common/List
      return this.databases.filter(({ name: databaseName }) => {
        return databaseName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },

  methods: {
    setActiveTab (tab) { this.tab = tab },
    changeSearchTerm ({ target }) {
      this.search = target.value
    }
  },

  mounted () {
    const title = 'Databases list'
    const subtitle = 'Display your databases using list or icon display'
    eventBus.$emit('databases:changeInfo', title, subtitle)
  }

}
</script>

<style lang="css">
</style>
