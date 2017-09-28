<template lang="html">
  <div class="">
    <h1 class="title">ER Diagram</h1>
    <img :src="erDiagramUrl" />
  </div>
</template>

<script>
// NOTE onclick maybe open modal with database description.
export default {
  data () {
    return {
      erDiagramUrl: 'http://static1.creately.com/blog/wp-content/uploads/2012/02/UML-Class-Diagram-Example.png'
    }
  }
}
</script>

<style lang="css">
</style>
