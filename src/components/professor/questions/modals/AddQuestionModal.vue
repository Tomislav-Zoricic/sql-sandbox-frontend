<template lang="html">
  <div class="modal"
       :class="{'is-active': isActive === true}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add new Question</p>
      </header>
      <section class="modal-card-body">

        <h5 class="subtitle is-5">
          Adding question to: Car database
        </h5>

        <hr>

        <div class="field">
          <label class="label">Question</label>
          <p class="control">
            <textarea class="textarea" v-model="question">
            </textarea>
          </p>
        </div>

        <div class="field">
          <label class="label">Answer</label>
          <p class="control">
            <textarea class="textarea" v-model="answer">
            </textarea>
          </p>
        </div>

        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary"
               @click="testAnswer">
              Test Your answer
            </a>
          </p>
        </div>

        <div class="field">
          <label class="label">Rank</label>
          <span class="select">
            <select v-model="rank">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </span>
        </div>

      </section>

      <footer class="modal-card-foot">
        <a class="button is-success"
           @click="createQuestion"
           :class="{ 'is-loading': isCreatingQuestion }"
           :disabled="!this.question || !this.answer ? true : false">
            Add
        </a>
        <a class="button"
           @click="toggle">Cancel</a>
      </footer>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapActions } from 'vuex'
import axios from 'axios'
import toastr from 'toastr'

export default {
  name: 'add-question-modal',

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      required: true
    },
    databaseId: {
      type: Number
      // required: true
      // NOTE maknuo sam ga zato jer dok nije odabrana nijedna baza,
      // preko propsa modal treba dobiti id, medutim nema ga
      // mozda je najbolje rijesit sa sejvanjem trenutnog stanja u bazi
    }
  },

  data () {
    return {
      question: '',
      answer: '',
      rank: 'easy',
      isCreatingQuestion: false
    }
  },

  methods: {
    ...mapActions({
      newQuestion: 'databases/createQuestion'
    }),

    createQuestion () {
      if (!this.validateData()) return
      this.isCreatingQuestion = true

      const questionPayload = {
        question: this.question,
        answer: this.answer,
        rank: this.rank,
        'database_id': this.databaseId
      }

      this.newQuestion(questionPayload)
        .then(question => {
          this.isCreatingQuestion = false
          toastr.success('Question created', 'Successful')
          this.toggle()

          this.question = ''
          this.answer = ''
          this.rank = 'easy'
        })
        .catch(error => {
          toastr.error(error, 'Something went wrong')
          this.toggle()
        })
    },

    validateData () {
      // NOTE Can do some better validation than this one.
      const messageSubtitle = 'Check your form, quesiton or answer might be missing'
      if (!this.question || !this.answer) {
        toastr.error(messageSubtitle, 'Something went wrong')
        return false
      }
      return true
    },

    testAnswer () {
      toastr.warning('Still Working on the feature', 'Test answer')
    }
  }
}
</script>

<style lang="css">
</style>
