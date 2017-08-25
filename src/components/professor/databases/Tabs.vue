<template lang="html">
  <div class="tabs is-large">
    <ul>
      <li @click="setActiveTab('databaseDetails')"
        :class="{ 'is-active': isDetailsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-info-circle"></i></span>
          <span>Details</span>
        </a>
      </li>
      <li @click="setActiveTab('databaseQuestions')"
        :class="{ 'is-active': isQuestionsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-question-circle"></i></span>
          <span>Questions</span>
        </a>
      </li>
      <li @click="setActiveTab('databaseStats')"
        :class="{ 'is-active': isStatsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-bar-chart"></i></span>
          <span>Stats</span>
        </a>
      </li>
      <li @click="setActiveTab('databaseOptions')"
        :class="{ 'is-active': isOptionsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-bars"></i></span>
          <span>Options</span>
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
      default: 'databaseDetails'
    },
    setActiveTab: {
      type: Function
    }
  },

  computed: {
    isDetailsTab () { return this.tab === 'databaseDetails' },
    isQuestionsTab () { return this.tab === 'databaseQuestions' },
    isStatsTab () { return this.tab === 'databaseStats' },
    isOptionsTab () { return this.tab === 'databaseOptions' }
  }
}
</script>

<style lang="css">
</style>
