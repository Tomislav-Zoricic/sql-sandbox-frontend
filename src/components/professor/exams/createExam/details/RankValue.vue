<template lang="html">
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{rank}}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="number"
            min="0.5"
            step="0.25"
            :rank="rank"
            v-model="value"
            @change="changeRankValue">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'
import { mapGetters } from 'vuex'

export default {
  props: {
    rank: String
  },

  computed: {
    ...mapGetters({
      rankValues: 'createExam/rankValues'
    }),

    value () {
      return this.rankValues[this.rank]
    }
  },

  methods: {
    changeRankValue ({ target }) {
      let value = parseFloat(target.value, 10)
      if (Number.isNaN(value)) return

      this.$store.commit('createExam/changeRankValue', {
        rank: this.rank , value
      })
    }
  }
}
</script>

<style lang="css">
</style>
