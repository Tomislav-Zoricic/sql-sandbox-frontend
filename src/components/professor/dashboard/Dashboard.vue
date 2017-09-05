<template lang="html">
  <div class="container">
    <navbar></navbar>
    <hero
      title="Welcome Tomislav Zoricic"
      subtitle="Nesto nesto"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
    </hero>
    <div class="columns">
      <div class="column is-one-third">
        <list
          title="Databases"
          generalRoute="DatabasesList"
          :items="databases"
          detailRoute="Database"
          :setName="databaseListEntry">
        </list>
        <pacman-loader :loading="!databases.length">
        </pacman-loader>
      </div>
      <div class="column is-one-third">
        <list
          title="Exams"
          generalRoute="ExamsList"
          :items="exams"
          detailRoute="Exam"
          :setName="examListEntry">
        </list>

        <grid-loader :loading="exams.length === 0">
        </grid-loader>
      </div>
      <div class="column is-one-third">
        <list
          title="Students"
          generalRoute="StudentsList"
          :items="students"
          detailRoute="Student"
          :setName="studentListEntry">
        </list>

        <bounce-loader :loading="!students.length">
        </bounce-loader>
      </div>
    </div>
  </div>
</template>

<script>
import { GridLoader,
         BounceLoader,
         PacmanLoader } from 'vue-spinner/dist/vue-spinner.min'
import Hero from './../../common/Hero'
import Navbar from './../../common/Navbar'
import List from './../../common/List'
import { mapActions, mapGetters } from 'vuex'

export default {

  components: {
    'hero': Hero,
    'navbar': Navbar,
    'list': List,
    'grid-loader': GridLoader,
    'bounce-loader': BounceLoader,
    'pacman-loader': PacmanLoader
  },

  methods: {
    ...mapActions({
      getDatabases: 'databases/getDatabases',
      getQuestions: 'databases/getQuestions',
      'getStudents': 'students/getStudents',
      'getExams': 'exams/getExams'
    }),

    databaseListEntry (database) {
      return `${database.name}`
    },

    examListEntry (exam) {
      return `Exam date: ${exam.date}`
    },

    studentListEntry (student) {
      return `${student.academic_year} - ${student.first_name} ${student.last_name}`
    }
  },

  computed: {
    ...mapGetters({
      databases: 'databases/databases',
      students: 'students/students',
      exams: 'exams/exams'
    })
  },

  created () {
    setTimeout(() => {
      // TODO #2 Retrieve this only for admin//professor
      this.getDatabases()
      this.getQuestions()
      this.getStudents()
      this.getExams()
    }, 3000)
  }

}
</script>

<style lang="scss" scoped>
  $lightblue: #0275D8;
  .col-lg-4 {
    border: 1px solid $lightblue;
  }

  .v-spinner {
    display: inline-block;
  }
</style>
