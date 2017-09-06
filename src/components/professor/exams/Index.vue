<template lang="html">
  <div class="container">
    <navbar></navbar>
    <hero title="Exams"
          subtitle="Exams subtitle">
    </hero>
    <router-view></router-view>
  </div>
</template>

<script>
import Hero from './../../common/Hero'
import Navbar from './../../common/Navbar'
import List from './../../common/List'

export default {
  name: 'databases',

  components: {
    'navbar': Navbar,
    'list': List,
    'hero': Hero
  }
}
</script>

<style lang="scss" scoped>
</style>
