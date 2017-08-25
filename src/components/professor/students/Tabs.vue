<template lang="html">
  <div class="tabs is-large">
    <ul>
      <li @click="setActiveTab('studentDetails')"
        :class="{ 'is-active': isDetailsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-info-circle"></i></span>
          <span>Details</span>
        </a>
      </li>
      <li @click="setActiveTab('studentTests')"
        :class="{ 'is-active': isTestsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-question-circle"></i></span>
          <span>Tests</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      default: 'studentDetails'
    },
    setActiveTab: {
      type: Function
    }
  },

  computed: {
    isDetailsTab () { return this.tab === 'studentDetails' },
    isTestsTab () { return this.tab === 'studentTests' }
  }
}
</script>

<style lang="css">
</style>
