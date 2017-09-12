<template lang="html">
  <div class="tabs is-large">
    <ul>
      <li @click="setActiveTab('active-exam-details')"
        :class="{ 'is-active': isDetailsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-info-circle"></i></span>
          <span>Details</span>
        </a>
      </li>
      <li @click="setActiveTab('active-exam-students')"
        :class="{ 'is-active': isStudentsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-users"></i></span>
          <span>Students</span>
        </a>
      </li>
      <li @click="setActiveTab('active-exam-history')"
        :class="{ 'is-active': isHistoryTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-history"></i></span>
          <span>History</span>
        </a>
      </li>
      <li @click="setActiveTab('active-exam-notifications')"
        :class="{ 'is-active': isNotificationsTab }">
        <a>
          <span class="icon is-small"><i class="fa fa-bullhorn"></i></span>
          <span>Notifications</span>
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
    isDetailsTab () { return this.tab === 'active-exam-details' },
    isStudentsTab () { return this.tab === 'active-exam-students' },
    isHistoryTab () { return this.tab === 'active-exam-history' },
    isNotificationsTab () { return this.tab === 'active-exam-notifications' }
  }
}
</script>

<style lang="css">
</style>
