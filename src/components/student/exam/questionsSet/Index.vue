<template lang="html">
  <div class="">
    <h1 class="title">Questions</h1>
    <questions-list></questions-list>
    <answer-input></answer-input>
    <a class="button is-primary is-outlined is-stretched is-large"
      @click="changeTab('exam-result-set')">
        Check
    </a>
  </div>
</template>

<script>
import QuestionsList from './QuestionsList'
import AnswerInput from './AnswerInput'
export default {
  props: {
    changeTab: Function
  },

  components: {
    'questions-list': QuestionsList,
    'answer-input': AnswerInput
  }
}
</script>

<style lang="css" scoped>
  .is-stretched {
    display: flex;
  }
</style>
