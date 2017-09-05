<template lang="html">
<div class="box">
  <article class="media">

    <div class="media-content">
      <div class="content">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Rank</p>
              <p class="title">{{(rank)}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Selected</p>
              <p class="title">{{questions.length || 0}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Out of</p>
              <p class="title">{{noOfQuestions}}</p>
            </div>
          </div>
        </nav>

        <hr>

        <table class="table is-striped">
          <tbody>
            <tr v-for="question in questions">
              <td class="table-item" @click="deselectQuestion(question)">
                {{question.question}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    rank: String,
    questions: {
      type: Array,
      default () { return [] }
    },
    noOfQuestions: {
      type: Number,
      default () { return 0 }
    }
  },

  methods: {
    deselectQuestion (question) {
      this.$store.commit('createExam/deselectQuestion', question)
    }
  }
}
</script>

<style lang="css" scoped>
  .table-item {
    cursor: pointer;
  }
</style>
