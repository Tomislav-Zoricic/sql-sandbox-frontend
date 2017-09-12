<template lang="html">
  <div class="">
    <h1>Selected questions</h1>
    <selected-by-rank
      :rank="EASY"
      :noOfQuestions="noOfQuestions[EASY]"
      :questions="selectedQuestions[EASY]">
    </selected-by-rank>
    <selected-by-rank
      :rank="MEDIUM"
      :noOfQuestions="noOfQuestions[MEDIUM]"
      :questions="selectedQuestions[MEDIUM]">
    </selected-by-rank>
    <selected-by-rank
      :rank="HARD"
      :noOfQuestions="noOfQuestions[HARD]"
      :questions="selectedQuestions[HARD]">
    </selected-by-rank>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SelectedByRank from './SelectedByRank'

export default {
  components: {
    'selected-by-rank': SelectedByRank
  },

  computed: {
    ...mapGetters({
      selectedQuestions: 'createExam/selectedQuestions',
      noOfQuestions: 'createExam/noOfQuestions'
    })
  },

  data () {
    return {
      'EASY': 'easy',
      'MEDIUM': 'medium',
      'HARD': 'hard'
    }
  }

}
</script>

<style lang="css">
</style>
