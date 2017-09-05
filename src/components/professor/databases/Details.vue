<template lang="html">
  <div>
    <check-diagram-modal
      :isActive="isCheckingDiagram"
      :urlDiagram="database.url_diagram"
      :toggle="toggleCheckDiagramModal">
    </check-diagram-modal>
    <div class="field">
      <label class="label">Name</label>
      <p class="control">
        <input class="input"
               :class="{ 'is-danger': !validName}"
               type="text"
               ref="name"
               v-model="database.name">
      </p>
    </div>

    <div class="field">
      <label class="label">Description</label>
      <p class="control">
        <textarea class="textarea"
                  v-bind:class="{ 'is-danger': !validDescription}"
                  v-model="database.description"></textarea>
      </p>
    </div>

    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input"
               :class="{ 'is-danger': !validUrlDiagram}"
               type="text"
               v-model="database.url_diagram">
      </p>
      <p class="control">
        <a class="button is-primary"
           :disabled="!this.validUrlDiagram"
           @click="toggleCheckDiagramModal">
          Check image
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import toastr from 'toastr'
import { mapActions } from 'vuex'
import CheckDiagramModal from './modals/CheckDiagramModal'

const URL = 'http://localhost:3000'

export default {
  name: 'database-details',

  props: {
    database: {
      type: Object,
      default () {
        return {
          database: {
            name: 'Database',
            description: 'Description',
            url_diagram: 'URL Diagram'
          }
        }
      }
    },
    setDataValidation: {
      type: Function
    }
  },

  components: {
    'check-diagram-modal': CheckDiagramModal
  },

  data () {
    return {
    //  dbId: parseInt(this.$route.params.id, 10),
      dataValid: true,
      isCheckingDiagram: false
    }
  },

  computed: {
    validName () {
      this.setDataValidation(this.validate())
      return !!this.database.name
    },
    validDescription () {
      return !!this.database.description
    },
    validUrlDiagram () {
      return !!this.database.url_diagram
    }
  },

  methods: {
    validate () {
      // NOTE Need better validation
      const d = this.database
      return !!d.name && !!d.description && !!d.url_diagram
    },

    toggleCheckDiagramModal() {
      this.isCheckingDiagram = !this.isCheckingDiagram
    }
  }
}
</script>

<style lang="css">

</style>
