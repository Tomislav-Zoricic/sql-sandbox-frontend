<template lang="html">
  <div class="tabs is-large">
    <ul class="is-centered">
      <li @click="setActiveTab('listDisplay')"
        :class="{ 'is-active': isListDisplay }">
        <a>
          <span class="icon is-small"><i class="fa fa-list"></i></span>
          <span>List Display</span>
        </a>
      </li>
      <li @click="setActiveTab('iconsDisplay')"
        :class="{ 'is-active': isIconsDisplay }">
        <a>
          <span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
          <span>Icons Display</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      default: 'studentDetails'
    },
    setActiveTab: {
      type: Function
    }
  },

  computed: {
    isListDisplay () { return this.tab === 'listDisplay' },
    isIconsDisplay () { return this.tab === 'iconsDisplay' }
  }
}
</script>

<style lang="css">
  .is-centered {
    justify-content: center !important;
  }
</style>
