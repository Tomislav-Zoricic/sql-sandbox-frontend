<template lang="html">
  <table class="table is-striped">
    <tr
      v-for="student in students"
      class="is-primary">
        <td>
          <div class="columns">
            <div class="column is-three-quarters">
              <router-link :to="{ name: 'Student', params: { id: student.id} }">
                {{student.first_name}} {{student.last_name}} - {{student.academic_year}}
              </router-link>
            </div>
            <div class="column is-one-quarter is-pulled-right">
              <a class="button is-danger">Delete</a>
            </div>
          </div>
        </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
  .is-pulled-right {
    text-align: right;
  }

  .is-three-quarters {
    cursor: pointer;
  }
</style>
