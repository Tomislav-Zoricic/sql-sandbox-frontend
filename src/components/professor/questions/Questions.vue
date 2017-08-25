<template lang="html">
<div>
  <delete-question-modal
    :isActive="isDeletingQuestion"
    :toggle="toggleDeleteQuestionModal"
    :question="questionBeingDeleted">
  </delete-question-modal>

  <div v-if="hasQuestions">
    <search-bar
      :searchTerm="search"
      :setSearchTerm="setSearchTerm"
      :isRankDisplayed="isRankDisplayed"
      :toggleRankDisplay="toggleRankDisplay"
      :isIconsDisplay="isIconsDisplay"
      :toggleIconDisplay="toggleIconDisplay">
    </search-bar>
    <filters
      :filter="filter"
      :setFilter="setFilter">
    </filters>
  </div>

  <section
    class="hero"
    v-if="!hasQuestions">
      <div class="hero-body">
        <h1 class="title">No questions in the database</h1>
        <h2 class="subtitle">Try adding some by clicking switching to the OPTIONS tab</h2>
      </div>
  </section>

  <icons-display
    v-show="isIconsDisplay"
   :questions="filteredQuestions"
   :openQuestion="openQuestion"
   :toggleDeleteModal="toggleDeleteQuestionModal"
   :isRankDisplayed="isRankDisplayed">
  </icons-display>
  <list-display
    v-show="!isIconsDisplay"
    :questions="filteredQuestions"
    :openQuestion="openQuestion"
    :toggleDeleteModal="toggleDeleteQuestionModal"
    :isRankDisplayed="isRankDisplayed">
  </list-display>
</div>
</template>

<script>
import SearchBar from './SearchBar'
import Filters from './Filters'
import ListDisplay from './displays/ListDisplay'
import IconsDisplay from './displays/IconsDisplay'
import DeleteQuestionModal from './modals/DeleteQuestionModal'

export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },

  components: {
    'search-bar': SearchBar,
    'filters': Filters,
    'list-display': ListDisplay,
    'icons-display': IconsDisplay,
    'delete-question-modal': DeleteQuestionModal
  },

  data () {
    return {
      search: '',
      filter: 'all',
      isRankDisplayed: false,
      isIconsDisplay: false,
      isDeletingQuestion: false,
      questionBeingDeleted: {}
    }
  },

  computed: {
    // NOTE Inefficient, but ok for now.
    filteredQuestions () {
      return this.questions.filter(item => {
        const rankFilter = this.filter !== 'all' ? item.rank === this.filter : true
        return rankFilter && item.question.toLowerCase().includes(this.search.toLowerCase())
      })
    },

    hasQuestions () {
      return this.questions.length > 0
    }
  },

  methods: {
    openQuestion(question) {
      console.log('STUP opening question', question)
    },

    toggleRankDisplay () {
      this.isRankDisplayed = !this.isRankDisplayed
    },

    toggleIconDisplay () {
      this.isIconsDisplay = !this.isIconsDisplay
    },

    setSearchTerm ({ target: searchInput }) {
      this.search = searchInput.value
    },

    toggleDeleteQuestionModal (question = {}) {
      this.isDeletingQuestion = !this.isDeletingQuestion

      // NOTE Don't like this way, if it is not sending a question,
      // then I get default $event object
      if (!question.target) {
        this.questionBeingDeleted = question
      }
    },

    setFilter(filter) {
      this.filter = filter
    }
  }
}
</script>

<style lang="scss" scoped>
  tr {
    cursor: pointer;
  }

</style>
