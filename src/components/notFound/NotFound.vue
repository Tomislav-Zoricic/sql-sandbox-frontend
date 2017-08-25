<template lang="html">
  <div class="content">
    <div class="columns">
      <div class="column is-one-half">
        <div class="notification is-danger">
          404 Not Found
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <router-link :to="{ name: 'Home' }">Back to safety</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="css">
</style>
