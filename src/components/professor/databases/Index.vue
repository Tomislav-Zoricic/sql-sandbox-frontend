<template lang="html">
  <div class="container">
    <navbar></navbar>
    <hero :title="title"
          :subtitle="subtitle">
    </hero>
    <div class="columns">
      <div class="column">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Hero from './../../common/Hero'
import Navbar from './../../common/Navbar'
import List from './../../common/List'
import eventBus from './../../../eventBus'

export default {
  name: 'databases',
  data () {
    return {
      title: 'Databases',
      subtitle: ''
    }
  },

  components: {
    'navbar': Navbar,
    'list': List,
    'hero': Hero
  },

  methods: {
    ...mapActions([
      'getDatabases',
      'getQuestions'
    ]),

    setInfo (title, subtitle) {
      this.title = title
      this.subtitle = subtitle
    }
  },

  mounted () {
    eventBus.$on('databases:changeInfo', (title, subtitle) => {
      this.setInfo(title, subtitle)
    })
    this.getDatabases()
    this.getQuestions()
  }
}
</script>

<style lang="scss" scoped>
</style>
