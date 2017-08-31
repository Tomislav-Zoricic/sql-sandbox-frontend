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

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Easy</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="number"
                  min="0"
                  rank="easy"
                  :value="questionsTotal.easy"
                  @change="changeQuestionsNumber">
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Medium</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="number"
                  min="0"
                  rank="medium"
                  :value="questionsTotal.medium"
                  @change="changeQuestionsNumber">
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Hard</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="number"
                  min="0"
                  rank="hard"
                  :value="questionsTotal.hard"
                  @change="changeQuestionsNumber">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    questions: {
      type: Array,
      default () { return [] }
    },
    questionsTotal: {
      type: Object,
      default() { return { easy: 1, medium: 1, hard: 1 } }
    },
    changeQuestionsNumber: Function
  },

  data () {
    return { name: '', date: moment().format("YYYY-MM-DD"), duration: 60 }
  }
}
</script>

<style lang="css">
</style>
