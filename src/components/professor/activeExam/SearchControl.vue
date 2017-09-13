<template lang="html">
  <div class="box">
    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Search history by student's name">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Display questions with percent score higher than">
        <span class="icon is-small is-left">
          <i class="fa fa-percent"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Display answers within last n minutes">
        <span class="icon is-small is-left">
          <i class="fa fa-hourglass-start"></i>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
