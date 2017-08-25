<template lang="html">
  <div class="columns is-multiline">
    <div v-for="database in databases" class="column is-6">
      <div class="card">
        <div class="card-content">
          <p class="title">
            {{database.name}}
          </p>
          <p class="subtitle">
            {{database.description}}
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span class="is-danger">
              <a>Delete</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              <router-link :to="{ name: 'Database', params: { id: database.id} }">
                See more
              </router-link>
            </span>
          </p>
        </footer>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
  $is-danger-color: #FF3860;
  .card-footer-item {
    cursor: pointer;
  }

  span.is-danger > a {
    color: $is-danger-color;

    &:hover {
      color: black;
    }
  }
</style>
