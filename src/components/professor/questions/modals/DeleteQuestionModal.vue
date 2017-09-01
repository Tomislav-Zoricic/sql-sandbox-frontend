<template lang="html">
  <div class="modal"
       :class="{'is-active': isActive === true}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <h3 class="title is-3">Are you sure you want to delete:</h3>
        <h4 class="title is-4">{{question.question}}</h4>
        <hr>
        <div class="field is-grouped has-centered-content">
          <p class="control">
            <button class="button is-primary"
                    ref="deleteQuestionButton"
                    @click="deleteQuestion">Yes</button>
          </p>
          <p class="control">
            <button class="button is-danger"
                    @click="toggle">No</button>
          </p>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import toastr from 'toastr'

export default {
  name: 'delete-question-modal',

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      required: true
    },
    question: {
      type: Object,
      required: true
    }
  },

  methods: {
    deleteQuestion () {
      const $deleteBtn = $(this.$refs.deleteQuestionButton)
      $deleteBtn.addClass('is-loading')

      const q_id = this.question.id

      const deleteUrl = `http://localhost:3000/questions/${q_id}`
      axios.delete(deleteUrl)
        .then(() => {
          const db_id = this.$route.params.id
          this.$store.commit('databases/removeQuestion', { q_id, db_id })

          $deleteBtn.removeClass('is-loading')
          toastr.success('Question deleted', 'Successful')
          this.toggle()
        })
        .catch(error => {
          toastr.error(error, 'Something went wrong')
          this.toggle()
        });
      }
  }
}
</script>

<style lang="css" scoped>
  .has-centered-content {
    justify-content: center;
  }
</style>
