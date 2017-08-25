<template lang="html">
  <div class="">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">Create Student</h1>
        <h2 class="subtitle">Hero subtitle</h2>
      </div>
    </section>
    <hr>
    <student-details
      :setDetailsValidation="setDetailsValidation">
    </student-details>
    <hr>

    <div class="field">
      <p class="control">
        <a
          class="button is-primary is-outlined is-stretched"
          :disabled="this.detailsValidation"
          @click="createStudent">
            Create student
        </a>
      </p>
    </div>

  </div>
</template>

<script>
import Details from './Details'

export default {
  components: {
    'student-details': Details
  },

  data () {
    return {
      student: {
        first_name: '',
        last_name: '',
        gender: 'male',
        academic_year: 2017
      },

      detailsValidation: false
    }
  },

  methods: {
    createStudent () {
      if (true) {

      }
      console.log('STUP create student')
    },

    setDetailsValidation (valid) {
      this.detailsValidation = valid
    }
  }
}
</script>

<style lang="css">
  .is-stretched {
    display: flex;
  }
</style>
