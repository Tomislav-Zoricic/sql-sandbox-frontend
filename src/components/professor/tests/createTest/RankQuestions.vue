<template lang="html">
<div class="box">
  <article class="media">

    <div class="media-content">
      <div class="content">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Rank</p>
              <p class="title">{{uppercaseFirstLetter(rank)}}</p>
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
              <p class="title">{{numberOfQuestions}}</p>
            </div>
          </div>
        </nav>

        <hr>

        <table class="table is-striped">
          <tbody>
            <tr v-for="q in questions"
                @click="unselectQuestion(q)">
              <td>{{q.question}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</div>
</template>

<script>
export default {
  props: {
    rank: {
      type: String
    },

    numberOfQuestions: {
      type: Number,
      default: 3
    },

    questions: {
      type: Array,
      default () { return [] }
    },

    unselectQuestion: {
      type: Function
    }
  },

  computed: {
    rankQuestions () {
      console.log('rank questions', Array.from(this.questions))
      return Array.from(this.questions).filter(q => q.rank === this.rank)
    }
  },

  methods: {
    uppercaseFirstLetter (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
}
</script>

<style lang="css" scoped>
  tr {
    cursor: pointer;
  }
</style>
