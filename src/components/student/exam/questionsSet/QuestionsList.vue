<template lang="html">
  <table class="table is-striped">
    <tr
      v-for="question in questions"
      class="is-primary is-clickable">
        <td
          @click="selectQuestion"
          :class="{'is-active': isActive(question.id)}"
          :id="question.id"
          :key="question.id">
          {{question.question}}
        </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      questions: 'activeExam/questions'
    })
  },

  data () {
    return {
      question: 1
    }
  },

  methods: {
    selectQuestion ({ target }) {
      console.log(target.id)
      this.question = parseInt(target.id)
    },

    isActive(question) {
      console.log('qqq', this.question, question)
      return this.question === parseInt(question)
    }
  }
}
</script>

<style lang="scss" scoped>

  $c: #00D1B2;
  .is-clickable {
    cursor: pointer;
  }

  .is-active {
    background-color: $c;
    color: white;
  }
</style>
