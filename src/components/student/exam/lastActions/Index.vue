<template lang="html">
  <div>
    <h1 class="title">Last actions</h1>
    <div class="results-container">
      <action></action>
      <action></action>
      <action></action>
      <action></action>
      <action></action>
      <action></action>
      <action></action>
      <action></action>
    </div>
  </div>
</template>

<script>
import Action from './Action'
export default {
  components: {
    action: Action
  }
}
</script>

<style lang="css" scoped>
  .results-container {
    height: 500px;
    overflow-y: scroll;
    border: 1px solid black;
  }
</style>
