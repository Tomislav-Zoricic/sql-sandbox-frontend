<template lang="html">
  <div class="container">
    <navbar></navbar>
    <hero title="Students"
          subtitle="students subtitle">
    </hero>
    <div class="columns">
      <div class="column">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Hero from './../../common/Hero'
import Navbar from './../../common/Navbar'
import List from './../../common/List'

export default {
  name: 'databases',

  components: {
    'navbar': Navbar,
    'list': List,
    'hero': Hero
  },

  computed: {
    ...mapGetters({
      students: 'students/students'
    })
  },

  methods: {
    ...mapActions({
      getStudents: 'students/getStudents'
    }),

    studentListEntry (student) {
      return `${student.academic_year} - ${student.first_name} ${student.last_name}`
    }
  },

  created () {
    this.getStudents()
  }

}
</script>

<style lang="css">
</style>
