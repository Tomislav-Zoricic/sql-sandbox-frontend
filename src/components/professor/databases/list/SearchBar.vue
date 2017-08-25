<template lang="html">
  <div class="control has-icons-left">
    <input class="input is-medium"
           type="text"
           placeholder="Search"
           v-model="search"
           v-on:input="change">

    <span class="icon is-small is-left">
      <i class="fa fa-search"></i>
    </span>
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
