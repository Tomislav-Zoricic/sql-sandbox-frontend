<template lang="html">
  <div>
    <div class="field has-addons">
    <p class="control is-expanded">
      <span class="select is-fullwidth">
        <select name="Database" @change="changeDatabase">
          <option
            v-for="database in allDatabases"
            :value="database.id">
              {{database.name}}
          </option>
        </select>
      </span>
    </p>
    </div>
    <nav class="panel">
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="Search" v-model="search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <p class="panel-tabs">
      <a @click="setRank('easy')"
         :class="{ 'active': rank === 'easy' }">Easy</a>
      <a @click="setRank('medium')"
         :class="{ 'active': rank === 'medium' }">Medium</a>
      <a @click="setRank('hard')"
         :class="{ 'active': rank === 'hard' }">Hard</a>
    </p>
    <a
      class="panel-block"
      v-for="question in searchFilteredQuestions"
      @click="selectQuestion(question)">
        {{question.question}}
    </a>
    </nav>
  </div>
</template>

<script>
import toastr from 'toastr'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      search: '',
      rank: ''
    }
  },

  computed: {
    ...mapGetters({
      allDatabases: 'databases/databases',
      allQuestions: 'databases/questions',
      database: 'createExam/database',
      questions: 'createExam/questions',
      noOfQuestions: 'createExam/noOfQuestions',
      selectedQuestions: 'createExam/selectedQuestions'
    }),

    rankFilteredQuestions () {
      return this.rank ? this.questions.filter(q => q.rank === this.rank) :
             this.questions
    },

    searchFilteredQuestions () {
      return this.rankFilteredQuestions.filter(q => q.question.includes(this.search))
    }
  },

  methods: {
    selectQuestion (question) {
      const { rank } = question
      // Check it doesn't cross allowed number or questions for that rank.
      if (this.noOfQuestions[rank] <= this.selectedQuestions[rank].length) {
        toastr.error('Something went wrong')
      } else {
        this.$store.commit('createExam/selectQuestion', question)
      }

    },

    changeDatabase ({ target }) {
      // NOTE Do i even need an entire database? db_id could/should be enough.
      // Selected questions should be removed once the database is changed.
      const db = this.allDatabases.filter(db => db.id === target.value)[0]
      const qs = this.allQuestions[target.value]
      this.$store.commit('createExam/setDatabase', db)
      this.$store.commit('createExam/setQuestions', qs)
    },

    setRank(rank) {
      this.rank = this.rank === rank ? '' : rank
    }
  }
}
</script>

<style lang="css" scoped>
  .active {
    color: black;
    font-size: 15px;
  }
</style>
