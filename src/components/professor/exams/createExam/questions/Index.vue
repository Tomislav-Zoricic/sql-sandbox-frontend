<template lang="html">
  <div class="columns">
    <div class="column is-one-third">
      <questions-list></questions-list>
    </div>
    <div class="column is-two-thirds">
      <selected-questions></selected-questions>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import QuestionsList from './QuestionsList'
import SelectedQuestions from './selected/Index'


export default {
  components: {
    'questions-list': QuestionsList,
    'selected-questions': SelectedQuestions
  }
}
</script>

<style lang="css">
</style>
