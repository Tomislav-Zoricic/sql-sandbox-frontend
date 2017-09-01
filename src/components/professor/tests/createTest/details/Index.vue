<template lang="html">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class="field">
        <label class="label">Name</label>
        <p class="control">
          <input
            class="input"
            type="text"
            v-model="name">
        </p>
      </div>

      <div class="field">
        <label class="label">Date</label>
        <p class="control">
          <input
            class="input"
            type="date"
            v-model="date">
        </p>
      </div>

      <div class="field">
        <label class="label">Duration (minutes)</label>
        <p class="control">
          <input
            class="input"
            type="number"
            min="30"
            v-model="duration">
        </p>
      </div>

      <div class="box">
        <h1 class="title">Questions</h1>
        <h2 class="subtitle">Select the questions in the Questions tab</h2>
        <no-of-questions rank="easy"></no-of-questions>
        <no-of-questions rank="medium"></no-of-questions>
        <no-of-questions rank="hard"></no-of-questions>
      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment'
import NoOfQuestions from './NoOfQuestions'
export default {
  components: {
    'no-of-questions': NoOfQuestions
  },

  data () {
    return { name: '', date: moment().format("YYYY-MM-DD"), duration: 60 }
  }
}
</script>

<style lang="css">
</style>
