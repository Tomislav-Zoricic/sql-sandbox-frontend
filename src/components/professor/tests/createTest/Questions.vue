<template lang="html">
  <div class="columns">
    <div class="column is-one-third">
      <questions-list
        :databases="databases"
        :setDatabaseId="setDatabaseId"
        :questions="questions"
        :selectQuestion="selectQuestion">
      </questions-list>
    </div>
    <div class="column is-two-thirds">
      <rank-questions
        rank="easy"
        :questions="selectedQuestions['easy']"
        :unselectQuestion="unselectQuestion"
        :numberOfQuestions="questionsTotal.easy">
      </rank-questions>
      <rank-questions
        rank="medium"
        :questions="selectedQuestions['medium']"
        :unselectQuestion="unselectQuestion"
        :numberOfQuestions="questionsTotal.medium">
      </rank-questions>
      <rank-questions
        rank="hard"
        :questions="selectedQuestions['hard']"
        :unselectQuestion="unselectQuestion"
        :numberOfQuestions="questionsTotal.hard">
      </rank-questions>
    </div>
  </div>
</template>

<script>
/*

  6.8
  moras u questionlist poslat listu available pitanja,
  i imati liste odabranih pitanja.
  najbolje je questionlist drzati kao obican array,
  a selectana pitanja mogu staviti u objekt sa rankovima kao keyevima
  question total za svaki rank se onda moze voditi kao size tog arraya,
  a moze se napraviti computed ako treba totalan broj pitanja



 */

import remove from 'lodash.remove'
import includes from 'lodash.includes'
import { mapActions, mapGetters } from 'vuex'
import List from './../../../common/List'
import QuestionsList from './QuestionsList'
import RankQuestions from './RankQuestions'


export default {
  props: {
    setDatabaseId: {
      type: Function
    },
    questions: {
      type: Array,
      default () { return [] }
    },
    questionsTotal: {
      type: Object,
      default() { return { easy: 1, medium: 1, hard: 1 } }
    }
  },


  // Vue.js does not support reactivity on Map and Set data types (yet?).
  // https://stackoverflow.com/questions/37130105/does-vue-support-reactivity-on-map-and-set-data-types
  data () {
    return {
      // If more question rank appear, remove hardcoding
      selectedQuestions: {
        'easy': [],
        'medium': [],
        'hard': []
      }
    }
  },

  components: {
    'list': List,
    'questions-list': QuestionsList,
    'rank-questions': RankQuestions
  },

  computed: {
    // NOTE Ako imam i tu getter baze, sto ce mi gore u indexu.
    ...mapGetters([
      'databases'
    ]),

    availableQuestions () {
      //NOTE mislim da je problem u tome sto ovaj hvata this.questions,
      //NOTE treba nekako neku kopiju dohvatit, pitaj boga idem ca
      return Array.from(this.questions)
    }
  },

  methods: {
    selectQuestion (question) {
      const rank = question.rank;
      this.question = this.questions.filter(q => {
        console.log('tebe ostavljam')
      })
      console.log(this.questions.length)
      this.selectedQuestions[rank].push(question);
    },

    unselectQuestion (question) {
      remove(this.selectedQuestions[rank], q => q.id === question.id)
      this.questions.push(question);
    },

    questionListEntry ({ question }) {
      return `${question}`
    }
  },

  created () {
    console.log('questions', this.questions);
    this.questions.forEach(q => console.log(q.database_id, q.question));
  }
}
</script>

<style lang="css">
</style>
