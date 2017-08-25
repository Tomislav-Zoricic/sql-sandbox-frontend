<template lang="html">
<div class="tabs">
  <ul>
    <li @click="setFilter('all')"
        :class="{ 'is-active': filter === 'all' }">
      <a>All</a>
    </li>
    <li @click="setFilter('easy')"
        :class="{ 'is-active': filter === 'easy' }">
      <a>Easy</a>
    </li>
    <li @click="setFilter('medium')"
        :class="{ 'is-active': filter === 'medium' }">
      <a>Medium</a>
    </li>
    <li @click="setFilter('hard')"
        :class="{ 'is-active': filter === 'hard' }">
      <a>Hard</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      default: 'all'
    },

    setFilter: {
      type: Function
    }
  }
}
</script>

<style lang="css">
</style>
