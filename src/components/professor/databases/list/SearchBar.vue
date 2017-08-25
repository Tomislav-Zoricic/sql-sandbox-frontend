<template lang="html">
  <div class="control">
    <input class="input is-medium"
           type="text"
           placeholder="Search"
           v-model="search"
           @input="change">
  </div>
</template>

<script>
export default {
  props: {
    change: {
      type: Function
    }
  },

  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="css">
</style>
