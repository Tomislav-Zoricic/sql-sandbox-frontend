<template lang="html">
  <div>
    <div class="field has-addons">
    <p class="control is-expanded">
      <span class="select is-fullwidth">
        <select name="Database"
                @change="setDatabaseId">
          <option
            v-for="database in databases"
            :value="database.id">
              {{database.name}}
          </option>
        </select>
      </span>
    </p>
    </div>
    <nav class="panel">
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="Search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <p class="panel-tabs">
      <a>Easy</a>
      <a>Medium</a>
      <a>Hard</a>
    </p>
    <a
      class="panel-block"
      v-for="question in questions"
      @click="selectQuestion(question)">
        {{question.question}}
    </a>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    databases: {
      type: Array,
      default () { return [] }
    },

    setDatabaseId: {
      type: Function
    },

    questions: {
      type: Array,
      default () { return [] }
    },

    selectQuestion: {
      type: Function
    }
  }
}
</script>

<style lang="css">
</style>
