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
        <input class="input is-small" type="text" placeholder="Search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <p class="panel-tabs">
      <a>Easy</a>
      <a>Medium</a>
      <a>Hard</a>
    </p>
    <a
      class="panel-block"
      v-for="question in questions"
      @click="selectQuestion(question)">
        {{question.question}}
    </a>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {},

  computed: {
    ...mapGetters({
      allDatabases: 'databases/databases',
      allQuestions: 'databases/questions',
      database: 'createTest/database',
      questions: 'createTest/questions'
    })
  },

  methods: {
    selectQuestion (question) {
      this.$store.commit('createTest/selectQuestion', question)
    },

    changeDatabase ({ target }) {
      // NOTE Do i even need an entire database? db_id could/should be enough.
      // Selected questions should be removed once the database is changed.
      const db = this.allDatabases.filter(db => db.id === target.value)[0]
      const qs = this.allQuestions[target.value]
      this.$store.commit('createTest/setDatabase', db)
      this.$store.commit('createTest/setQuestions', qs)
    }
  }
}
</script>

<style lang="css">
</style>
