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
            min="0"
            :rank="rank"
            v-model="value"
            @change="changeQuestionsNumber">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    rank: String
  },

  data () {
    return {
      value : 0
    }
  },

  computed: {
    ...mapGetters({
      moOfQuestions: 'createTest/noOfQuestions'
    })
  },

  methods: {
    changeQuestionsNumber (event) {
      // NOTE Should have all rank questions, so you can check not to allow
      // more rank questions then there are in the database.
      if (true) {
        this.$store.commit('createTest/changeQuestionsNumber', {
          rank: this.rank , value: parseInt(this.value, 10)
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
