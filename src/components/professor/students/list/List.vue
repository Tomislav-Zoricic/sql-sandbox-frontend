<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <control-bar
      :changeSearch="changeSearch"
      :changeYear="changeYear">
    </control-bar>
    <hr />

    <icons-display
      v-show="isIconsDisplay"
     :students="filteredStudents">
    </icons-display>
    <list-display
      v-show="!isIconsDisplay"
     :students="filteredStudents">
    </list-display>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tabs from './Tabs'
import ControlBar from './ControlBar'
import IconsDisplay from './displays/IconsDisplay'
import ListDisplay from './displays/ListDisplay'
import eventBus from './../../../../eventBus'

export default {

  data() {
    return {
      tab: 'iconsDisplay',
      search: '',
      academicYear: '2017'
    }
  },

  components: {
    'tabs': Tabs,
    'control-bar': ControlBar,
    'icons-display': IconsDisplay,
    'list-display': ListDisplay
  },

  computed: {
    ...mapGetters ([
      'students'
    ]),

    filteredStudents () {
      // NOTE Figure out how to filter when you have first and last name separated.
      return this.students
    },

    isIconsDisplay () {
        return this.tab === 'iconsDisplay'
    }
  },

  methods: {
    setActiveTab (tab) { this.tab = tab },

    changeSearch ({ target }) {
      this.search = target.value
    },

    changeYear ({ target }) {
      this.academicYear = target.value
    }
  }
}
</script>

<style lang="css">
</style>
