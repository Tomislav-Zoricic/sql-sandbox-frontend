<template lang="html">
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>
      <p>{{content}}</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'jumbotron',
  props: {
    title: {
      type: String,
      default: 'Title',
      required: true
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'is-primary'
    }
  }
}
</script>

<style lang="css">
</style>
