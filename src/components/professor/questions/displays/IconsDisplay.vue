<template lang="html">
  <div class="columns is-multiline">
    <div v-for="question in questions" class="column is-6">
      <div class="card">
        <div class="card-content">
          <p class="title">
            {{question.question}}
          </p>
          <p class="subtitle">
            {{question.rank}}
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item"
             @click="toggleDeleteModal(question)">
            <span class="is-danger">
              <a>Delete question</a>
            </span>
          </p>
          <p class="card-footer-item"
             @click="openQuestion(question)">
            <span>
              <a>See more</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
  $is-danger-color: #FF3860;
  .card-footer-item {
    cursor: pointer;
  }

  span.is-danger > a {
    color: $is-danger-color;

    &:hover {
      color: black;
    }
  }
</style>
