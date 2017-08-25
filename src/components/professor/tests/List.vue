<template lang="html">
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
          list of tests
      </div>
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
