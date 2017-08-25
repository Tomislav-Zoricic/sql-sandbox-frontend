<template lang="html">
  <div class="">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Email</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input"
                   type="email"
                   v-model="student.email">
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Full name</label>
      </div>
      <div class="field-body">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input class="input"
                   type="text"
                   placeholder="Name"
                   v-model="student.first_name">
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded">
            <input class="input"
                   type="text"
                   placeholder="Surname"
                   v-model="student.last_name">
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Gender</label>
        {{student.gender}}
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" value="male" v-model="student.gender">
              <span class="icon is-medium"><i class="fa fa-male"></i></span>
            </label>
            <label class="radio">
              <input type="radio" value="female" v-model="student.gender">
              <span class="icon is-medium"><i class="fa fa-female"></i></span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Academic year</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input"
                   type="number"
                   min="2000"
                   v-model="student.academic_year">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      default () {
        return {
          email: '',
          first_name: '',
          last_name: '',
          gender: 'female',
          academic_year: ''
        }
      }
    },
    setDetailsValidation: {
      type: Function
    }
  },

  watch: {
    'student.email' (value) {
      console.log('value', value)
    }
  }
}
</script>

<style lang="css">
</style>
