<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <component
      :is="tab">
    </component>
  </div>
</template>

<script>
import Tabs from './Tabs'
import Details from './Details'
import Students from './Students'
import History from './History'
import Notifications from './Notifications'

export default {
  components: {
    tabs: Tabs,
    'active-exam-details': Details,
    'active-exam-students': Students,
    'active-exam-history': History,
    'active-exam-notifications': Notifications
  },

  data () {
    return {
      tab: 'active-exam-details'
    }
  },

  methods: {
    setActiveTab (tab) {
      this.tab = tab
    }
  }
}
</script>

<style lang="css">
</style>
