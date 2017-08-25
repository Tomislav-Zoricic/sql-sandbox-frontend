<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <keep-alive>
      <component
        :is="tab"
        :setDatabaseId="setDatabaseId"
        :questionsTotal="questionsTotal"
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
import Details from './Details'
import Questions from './Questions'
const DEFAULT_QUESTIONS_NUMBER = 1

export default {
  data () {
    return {
      tab: 'testDetails',
      // NOTE Another way of preselecting default database ??
      databaseId: 1,
      questionsTotal: {
        easy: DEFAULT_QUESTIONS_NUMBER,
        medium: DEFAULT_QUESTIONS_NUMBER,
        hard: DEFAULT_QUESTIONS_NUMBER
      }
    }
  },

  components: {
    'tabs': Tabs,
    'testDetails': Details,
    'testQuestions': Questions
  },

  computed: {
    ...mapGetters([
      'databases',
      'questions'
    ]),

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

  methods: {
    ...mapActions([
      'getDatabases',
      'getQuestions'
    ]),

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
    this.getDatabases()
    this.getQuestions()
  }
}
</script>

<style lang="css" scoped>
  .is-stretched {
    display: flex;
  }
</style>
