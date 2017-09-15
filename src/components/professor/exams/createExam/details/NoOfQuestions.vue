<template lang="html">
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{rank}}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="number"
            :min="noSelectedRankQuestions"
            :rank="rank"
            v-model="value"
            @change="changeQuestionsNumber">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    rank: String
  },


  computed: {
    ...mapGetters({
      noOfQuestions: 'createExam/noOfQuestions',
      questions: 'createExam/questions',
      selectedQuestions: 'createExam/selectedQuestions'
    }),

    value () {
      return this.noOfQuestions[this.rank]
    },

    noRankQuestions () {
      return this.questions.filter(({ rank }) => rank === this.rank).length
    },

    noSelectedRankQuestions () {
      return this.selectedQuestions[this.rank].length
    }
  },

  methods: {
    changeQuestionsNumber ({ target }) {
      let value = parseInt(target.value, 10)

      const noQuestions = this.noRankQuestions + this.noSelectedRankQuestions

      if (value > this.noQuestions) {
        toastr.error(`This database doesn't have ${value} ${this.rank} questions`,
                    'Something went wrong')
        value = this.noRankQuestions
      }

      if (value < this.noSelectedRankQuestions) {
        toastr.error(`Check the number of already selected ${this.rank} questions`,
                    'Something went wrong')
        value = this.noSelectedRankQuestions
      }

      this.$store.commit('createExam/changeQuestionsNumber', {
        rank: this.rank , value
      })
    }
  }
}
</script>

<style lang="css">
</style>
