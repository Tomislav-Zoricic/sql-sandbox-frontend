<template lang="html">
  <div class="box">
    <database-details
      :setDataValidation="setDataValidation"
      :database="database">
    </database-details>

    <hr>

    <div class="field">
      <p class="control">
        <a class="button is-primary is-outlined is-stretched"
           :disabled="!this.dataValid"
           @click="createDatabase">
            Create database
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import toastr from 'toastr'
import Details from './Details'
import eventBus from './../../../eventBus'

export default {
  components: {
    'database-details': Details
  },

  data () {
    return {
      database: {
        name: 'Database',
        description: 'Description',
        url_diagram: 'URL Diagram'
      },

      dataValid: true
    }
  },

  methods: {
    createDatabase () {

      axios.post('http://localhost:3000/databases',{
        name: this.database.name,
        description: this.database.description,
        url_diagram: this.database.url_diagram
      })
      .then(({ data: database }) => {
        this.$store.commit('addDatabase', database)

        console.log('retrieved from server', database)
        toastr.success('Creating database', 'Successful')

        // Clear input data
        this.database.name = 'Database'
        this.database.description = 'Description'
        this.database.url_diagram = 'URL Diagram'
      })
      .catch(error => {
        toastr.error(error, 'Something went wrong')
      });
    },

    setDataValidation (valid) {
      this.dataValid = valid
    }
  },

  mounted() {
    const title = 'Create new database'
    const subtitle = 'This is subtext explaining the new database creation'
    eventBus.$emit('databases:changeInfo', title, subtitle)
  }
}
</script>

<style lang="css" scoped>
  .is-stretched {
    display: flex;
  }
</style>
