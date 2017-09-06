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
import { mapActions } from 'vuex'
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
      // NOTE Set this to empty string and replace them with placeholders.
      database: {
        name: 'Database',
        description: 'Description',
        url_diagram: 'URL Diagram'
      },

      dataValid: true
    }
  },

  methods: {
    ...mapActions({
      newDatabase: 'databases/createDatabase'
    }),

    createDatabase () {
      this.newDatabase(this.database)
        .then(({ id }) => {
          // Clear input data.
          this.database.name = 'Database'
          this.database.description = 'Description'
          this.database.url_diagram = 'URL Diagram'

          this.$router.push({ name: 'Database', params: { id }})
          toastr.success('Creating database', 'Successful')
        })
      .catch(error => {
        toastr.error(error, 'Something went wrong')
      })
    },

    setDataValidation (valid) {
      this.dataValid = valid
    }
  },

  mounted() {
    const title = 'Create new database'
    const subtitle = `For now, just give your database name and description.
                      You'll be able to add questions to it once it is created.`
    eventBus.$emit('databases:changeInfo', title, subtitle)
  }
}
</script>

<style lang="css" scoped>
  .is-stretched {
    display: flex;
  }
</style>
