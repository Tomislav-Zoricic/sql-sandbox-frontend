<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <icons-display
      v-show="isIconsDisplay"
     :databases="databases">
    </icons-display>
    <list-display
      v-show="!isIconsDisplay"
     :databases="databases">
    </list-display>
  </div>

</template>

<script>
import Tabs from './Tabs'
import IconsDisplay from './displays/IconsDisplay'
import ListDisplay from './displays/ListDisplay'
import eventBus from './../../../../eventBus'
import { mapGetters } from 'vuex'

export default {
  components: {
    'tabs': Tabs,
    'icons-display': IconsDisplay,
    'list-display': ListDisplay
  },

  data () {
    return {
      tab: 'iconsDisplay'
    }
  },

  computed: {
    ...mapGetters([
      'databases',
      'questions'
    ]),

    isIconsDisplay() {
        return this.tab === 'iconsDisplay'
    }
  },

  methods: {
    setActiveTab (tab) { this.tab = tab }
  },

  mounted() {
    const title = 'Databases list'
    const subtitle = 'Display your databases using list or icon display'
    eventBus.$emit('databases:changeInfo', title, subtitle)
  }

}
</script>

<style lang="css">
</style>
