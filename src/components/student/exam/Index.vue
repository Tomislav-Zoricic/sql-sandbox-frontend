<template lang="html">
  <div class="container">
    <exam-header></exam-header>
    <div class="columns">
      <div class="column is-two-thirds">

      </div>
      <div class="column is-one-third">
        <exam-last-actions></exam-last-actions>
      </div>
    </div>
    <h1>Active exam</h1>
  </div>
</template>

<script>
import Header from './header/Index'
import LastActions from './lastActions/Index'
export default {
  components: {
    'exam-header': Header,
    'exam-last-actions': LastActions
  }
}
</script>

<style lang="css">
</style>
