<template lang="html">
<div>
  <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
  <component
    :is="tab"
    :student="student">
  </component>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tabs from './Tabs'
import List from './../../common/List'
import Details from './Details'
import Exams from './Exams'

export default {
  name: 'details',

  data () {
    return {
      tab: 'studentDetails'
    }
  },

  components: {
    'tabs': Tabs,
    'list': List,
    'studentDetails': Details,
    'studentExams': Exams
  },

  computed: {
    ...mapGetters({
      students: 'students/students'
    }),
    isDetailsTab () { return this.tab === 'studentDetails' },
    isExamsTab () { return this.tab === 'studentExams' },
    student () {
      const id = parseInt(this.$route.params.id, 10)

      if (this.students.length) {
        const student = this.students.filter(s => s.id === id)[0]
        return student
      }
      // For details where this is sent you only need name and description.
      // NOTE Change this.
      return {
        name: 'Student'
      }
    }
  },

  methods: {
    setActiveTab (tab) { this.tab = tab }
  },

  beforeRouteLeave (to, from, next) {
    // NOTE Try including the same change to databaseDetails tab
    // when you change route param.
    this.tab = 'studentDetails'

    next()
  },

  watch: {
    '$route' (to, from) {
      this.studentId = to.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
