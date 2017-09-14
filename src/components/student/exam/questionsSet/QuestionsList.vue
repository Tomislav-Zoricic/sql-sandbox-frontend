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
      activeQuestion: -1
    }
  },

  methods: {
    selectQuestion ({ target }) {
      this.activeQuestion = parseInt(target.id)
    },

    isActive(question) {
      return this.activeQuestion === parseInt(question)
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
