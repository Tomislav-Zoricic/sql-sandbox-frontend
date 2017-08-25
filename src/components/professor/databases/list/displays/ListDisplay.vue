<template lang="html">
  <table class="table is-striped">
    <tr
      v-for="database in databases"
      class="is-primary">
        <td>
          <div class="columns">
            <div class="column is-three-quarters">
              <router-link :to="{ name: 'Database', params: { id: database.id} }">
                {{database.name}}
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
    databases: {
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
