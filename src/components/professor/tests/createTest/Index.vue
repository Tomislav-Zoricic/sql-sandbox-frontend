<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <keep-alive>
      <component
        :is="tab"
        :setDatabaseId="setDatabaseId"
        :changeQuestionsNumber="changeQuestionsNumber"
        :questions="databaseQuestions">
      </component>
    </keep-alive>
    <div class="field">
      <p class="control">
        <a class="button is-primary is-outlined is-stretched is-large"
           @click="createTest">
            Create test
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
      tab: 'testDetails'
    }
  },

  components: {
    'tabs': Tabs,
    'testDetails': Details,
    'testQuestions': Questions
  },

  computed: {
    ...mapGetters({
      databases: 'databases/databases',
      questions: 'databases/questions'
    }),

    database () {
      if (this.databases.length) {
        const database = this.databases.filter(db => db.id === this.databaseId)[0]
        return database ? database : {}
      }
    },

    databaseQuestions () {
      return this.questions[this.databaseId] || []
    }
  },

  /*
    PREFILL CREATE TEST STORE with questions from specific database.
    Get all databases and set the default questions and database id,
    from any database received.


   */

  methods: {
    ...mapActions({
      getDatabases: 'databases/getDatabases',
      getQuestions: 'databases/getQuestions'
    }),

    createTest () {
      console.log('STUP create test')
    },

    setDatabaseId (elem) {
      this.databaseId = parseInt(elem.target.value)
    },

    setActiveTab (tab) { this.tab = tab },

    changeQuestionsNumber({ target: el}) {
      const rank = el.getAttribute('rank')
      const value = parseInt(el.value, 10)
      this.questionsTotal[rank] = value
    }
  },

  created () {
    // Sets databases and questions in store.
    Promise.all([this.getDatabases(), this.getQuestions()])
      .then(() => {
        // Case 1: No databases, break and redirect to creating databases.
        if (!this.databases.length) {
          console.log('No databases, redirect to database create page with warning')
        }

        // Case 2: Set default database.
        // NOTE Decide further on a way of setting default database.
        const dbDefault = this.databases[0]
        const dbQuestions = this.questions[dbDefault.id]
        this.$store.commit('createTest:setDatabase', dbDefault)

      })
  }
}
</script>

<style lang="css" scoped>
  .is-stretched {
    display: flex;
  }
</style>
