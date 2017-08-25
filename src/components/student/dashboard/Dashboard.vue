<template lang="html">
  <div class="">
    <student-navbar></student-navbar>
    <router-link :to="{ name: 'StudentTest', params: {} }">
      Student test
    </router-link>
    <router-link :to="{ name: 'StudentResults', params: {} }">
      Student results
    </router-link>
    <router-view>
      <div class="">
        alkohol
      </div>
    </router-view>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'student-dashboard',

  components: {
    'student-navbar': Navbar
  }
}
</script>

<style lang="scss" scoped>
</style>
