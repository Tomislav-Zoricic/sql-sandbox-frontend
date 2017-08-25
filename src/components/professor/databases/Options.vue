<template lang="html">
  <div class="container">
    <add-question-modal
      :isActive="isAddingQuestion"
      :databaseId="databaseId"
      :toggle="toggleAddQuestionModal">
    </add-question-modal>
    <delete-database-modal
      :isActive="isDeletingDatabase"
      :toggle="toggleDeleteDatabaseModal"
      :databaseId="databaseId"
      :databaseName="databaseName"
      :deleteDatabase="deleteDatabase">
    </delete-database-modal>

    <div class="field is-horizontal">
      <div class="field-label is-expanded">
        <label class="label">Delete database</label>
      </div>
      <div class="field-body">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <a class="button is-danger is-outlined"
               @click="toggleDeleteDatabaseModal">
              <span>Delete</span>
              <span class="icon is-small">
                <i class="fa fa-times"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-expanded">
        <label class="label">Add new Question</label>
      </div>
      <div class="field-body">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <a class="button is-primary is-outlined"
               @click="toggleAddQuestionModal">
              Add
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-expanded">
        <label class="label">Import questions as CSV</label>
      </div>
      <div class="field-body">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <a class="button is-primary is-outlined">
              Upload
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddQuestionModal from './../questions/modals/AddQuestionModal'
import DeleteDatabaseModal from './modals/DeleteDatabaseModal'
export default {

  components: {
    'add-question-modal': AddQuestionModal,
    'delete-database-modal': DeleteDatabaseModal
  },

  props: {
    database: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  // NOTE This is last level of sending props to children,
  // after this set it in the store.
  // OR check out a way of setting the
  // active database in store.
  computed: {
    databaseName () {
      return this.database.name
    },
    databaseId () {
      return this.database.id
    }
  },

  data () {
    return {
      isAddingQuestion: false,
      isDeletingDatabase: false
    }
  },

  methods: {
    toggleAddQuestionModal () {
      this.isAddingQuestion = !this.isAddingQuestion
    },

    toggleDeleteDatabaseModal () {
      this.isDeletingDatabase = !this.isDeletingDatabase
    },

    deleteDatabase () {
      console.log('STUP deleting database')
    }
  }
}
</script>

<style lang="css">
</style>
