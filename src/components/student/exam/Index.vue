<template lang="html">
  <div class="container">
    <exam-header></exam-header>
    <exam-message-board v-show="hasMessage"></exam-message-board>
    <div class="columns">
      <div class="column is-two-thirds">
        <keep-alive>
          <component
            :is="tab"
            :changeTab="changeTab">
          </component>
        </keep-alive>
      </div>
      <div class="column is-one-third">
        <exam-last-actions></exam-last-actions>
        <exam-erdiagram></exam-erdiagram>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import QuestionsSet from './questionsSet/Index'
import ResultSet from './ResultSet'
import Header from './header/Index'
import LastActions from './lastActions/Index'
import ERDiagram from './erDiagram'
import MessageBoard from './MessageBoard'
export default {
  data () {
    return {
      tab: 'exam-questions-set',
      hasMessage: true
    }
  },

  components: {
    'exam-questions-set': QuestionsSet,
    'exam-result-set': ResultSet,
    'exam-header': Header,
    'exam-last-actions': LastActions,
    'exam-erdiagram': ERDiagram,
    'exam-message-board': MessageBoard
  },

  methods: {
    ...mapActions({
      getExam: 'activeExam/getExam'
    }),

    changeTab (tab) {
      this.tab = tab
    }
  },

  created () {
    this.getExam()
  }
}
</script>

<style lang="css">
</style>
