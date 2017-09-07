<template lang="html">
  <div class="tabs is-large">
    <ul class="is-centered">
      <li @click="setActiveTab('examDetails')"
        :class="{ 'is-active': isDetailsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-info-circle"></i></span>
          <span>Details</span>
        </a>
      </li>
      <li @click="setActiveTab('examQuestions')"
        :class="{ 'is-active': isQuestionsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-question-circle"></i></span>
          <span>Questions</span>
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
    isDetailsTab () { return this.tab === 'examDetails' },
    isQuestionsTab () { return this.tab === 'examQuestions' }
  }
}
</script>

<style lang="css">
  .is-centered {
    justify-content: center !important;
  }
</style>
