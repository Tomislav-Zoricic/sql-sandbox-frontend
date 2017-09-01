<template lang="html">
  <div class="modal"
       :class="{'is-active': isActive === true}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <h3 class="title is-3">Are yu sure you want to delete:</h3>
        <h4 class="title is-4">{{databaseName}}</h4>
        <p>All questions related to database will also be deleted,</p>
        <p>including the tests containing this database.</p>
        <hr>
        <div class="field is-grouped has-centered-content">
          <p class="control">
            <button class="button is-primary"
                    @click="deleteDatabase">Yes</button>
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
  name: 'delete-database-modal',

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
    },
    databaseName: {
      type: String,
      default: 'Database name'
      //required: true
    }
  },

  methods: {
    deleteDatabase () {
      // const $deleteBtn = $(this.$refs.deleteDatabaseButton)
      // $deleteBtn.addClass('is-loading')

      // NOTE Maybe just send entire database object instead od name and id separately.
      const id = this.databaseId

      // NOTE Treba kaskadno brisat i sva pitanja vezanja uz njega.
      // sto se trenutno sa json-serverom ne moze raditi.
      //
      // NOTE
      // U nekoj daljnjoj buducoj iteraciji, ako ikad do nje dode,
      // ukoliko ima ispita vezanih za neka pitanja, treba provjeriti kako brisanje
      // sa tim ide, jel to ide u neku arhivu pitanja il sta
      const deleteDatabaseUrl = `http://localhost:3000/databases/${id}`
      const deleteQuestionsUrl = `http://localhost:3000/questions?database_id=${id}`
      axios.delete(deleteDatabaseUrl)
        // NOTE
        // https://github.com/typicode/json-server/issues/310
        // json-server doesn't support query parameter for delete,
        // you can only delete by id.
        // .then(() => {
        //   axios.delete(deleteQuestionsUrl)
          .then(() => {
            this.$store.commit('databases/removeDatabase', id)

            // $deleteBtn.removeClass('is-loading')
            toastr.success('Database deleted, alongside with its questions', 'Successful')
            this.toggle()
          })
        // })
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
