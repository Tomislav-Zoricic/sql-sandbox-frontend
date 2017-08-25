<template lang="html">
<div class="box">
  <div class="field">
    <p class="control has-icons-left">
      <input
        class="input"
        type="text"
        placeholder="Find your question"
        @keyup="setSearchTerm"
        :value="searchTerm">
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </p>
  </div>

  <div class="field">
    <p class="control">
      <label class="checkbox">
        <input
          type="checkbox"
          @click="toggleIconDisplay"
          :value="isIconsDisplay">
            Show questions as icons
      </label>
    </p>
  </div>

  <div class="field" v-if="!isIconsDisplay">
    <p class="control">
      <label class="checkbox">
        <input
          type="checkbox"
          @click="toggleRankDisplay"
          :value="isRankDisplayed">
        Display rank alongside question
      </label>
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    searchTerm: {
      type: String,
      default: ''
    },
    setSearchTerm: {
      type: Function
    },
    isRankDisplayed: {
      type: Boolean,
      default: false
    },
    toggleRankDisplay: {
      type: Function
    },
    isIconsDisplay: {
      type: Boolean,
      default: false
    },
    toggleIconDisplay: {
      type: Function
    }
  }
}
</script>

<style lang="css">
</style>
