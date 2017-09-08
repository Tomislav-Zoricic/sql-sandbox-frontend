<template lang="html">
  <div class="container">
    <exam-header></exam-header>
    <div class="columns">
      <div class="column is-two-thirds">

      </div>
      <div class="column is-one-third">
        <exam-last-actions></exam-last-actions>
        <exam-erdiagram></exam-erdiagram>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header/Index'
import LastActions from './lastActions/Index'
import ERDiagram from './erDiagram'
export default {
  components: {
    'exam-header': Header,
    'exam-last-actions': LastActions,
    'exam-erdiagram': ERDiagram
  }
}
</script>

<style lang="css">
</style>
