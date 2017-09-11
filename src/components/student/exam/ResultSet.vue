<template lang="html">
  <div class="">
    <h1 class="title">Result</h1>
    <div
      class="is-clickable"
      @click="changeTab('exam-questions-set')">
      <span class="icon is-large is-right">
        <i class="fa fa-times"></i>
      </span>
    </div>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    changeTab: Function
  },

  data () {
    return {
      // NOTE Put load animation if answer isn't received yet.
      isWorking: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .is-clickable {
    cursor: pointer;
    &:hover {
      background-color: #D3D3D3;
      color: red;
    }
  }
</style>
