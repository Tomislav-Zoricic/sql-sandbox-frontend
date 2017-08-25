<template lang="html">
  <table class="table is-striped">
    <tr
      v-for="question in questions"
      class="is-primary">
        <td v-if="isRankDisplayed">{{question.rank}}</td>
        <td>
          <div class="columns">
            <div class="column is-three-quarters"
                 @click="openQuestion(question)">
              {{question.question}}
            </div>
            <div class="column is-one-quarter is-pulled-right">
              <a class="button is-danger"
                 @click="toggleDeleteModal(question)">Delete</a>
            </div>
          </div>
        </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    },

    isRankDisplayed: {
      type: Boolean,
      required: true
    },

    openQuestion: {
      type: Function,
      required: true
    },

    toggleDeleteModal: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
  .is-pulled-right {
    text-align: right;
  }

  .is-three-quarters {
    cursor: pointer;
  }
</style>
