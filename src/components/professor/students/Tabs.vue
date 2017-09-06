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
      <li @click="setActiveTab('studentExams')"
        :class="{ 'is-active': isExamsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-question-circle"></i></span>
          <span>Exams</span>
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
    isExamsTab () { return this.tab === 'studentExams' }
  }
}
</script>

<style lang="css">
</style>
