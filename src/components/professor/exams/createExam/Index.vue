<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <keep-alive>
      <component :is="tab"></component>
    </keep-alive>
    <div class="field">
      <p class="control">
        <a class="button is-primary is-outlined is-stretched is-large"
           @click="createExam">
            Create Exam
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tabs from './Tabs'
import Details from './details/Index'
import Questions from './questions/Index'

export default {
  data () {
    return {
      tab: 'examDetails'
    }
  },

  components: {
    'tabs': Tabs,
    'examDetails': Details,
    'examQuestions': Questions
  },

  computed: {
    ...mapGetters({
      databases: 'databases/databases',
      questions: 'databases/questions'
    })
  },

  methods: {
    ...mapActions({
      getDatabases: 'databases/getDatabases',
      getQuestions: 'databases/getQuestions'
    }),

    createExam () {
      console.log('STUP create exam')
    },

    setActiveTab (tab) { this.tab = tab }
  },

  created () {
    // Questions and databases already in the store.
    if (this.databases.length && this.questions.length) return

    // Sets databases and questions in store.
    Promise.all([
      this.getDatabases(), this.getQuestions()
    ]).then(() => {
        // Case 1: No databases, break and redirect to creating databases.
      if (!this.databases.length) {
        console.log('No databases, redirect to database create page with warning')
        return
      }

      // Case 2: Set default database.
      // NOTE Decide further on a way of setting default database.
      const dbDefault = this.databases[0]
      const dbQuestions = this.questions[dbDefault.id]
      this.$store.commit('createExam/setDatabase', dbDefault)
      this.$store.commit('createExam/setQuestions', dbQuestions)
    })
  }
}
</script>

<style lang="css" scoped>
  .is-stretched {
    display: flex;
  }
</style>
