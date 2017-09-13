<template lang="html">
<div class="">
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <search-control></search-control>
    </div>
  </div>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div v-for="entry in history" class="box">
          <div class="media-content">
            <div class="content">
              <h4 class="title">
                <strong>{{entry.student}}</strong>
                <small>Score</small> <small>{{entry.score}} %</small>
                <small class="is-pulled-right">{{entry.timestamp}}</small>
              </h4>
              <div class="box">
                <h5 class="subtitle">Question</h5>
                <p>{{entry.question}}</p>
              </div>
              <div class="box">
                <h5 class="subtitle">Answer</h5>
                <p>{{entry.answer}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import faker from 'faker'
import SearchControl from './SearchControl'

export default {

  components: {
    'search-control': SearchControl
  },

  computed: {
    history () {
      return [...Array(27)].map(() => {
        return {
          student: faker.name.findName(),
          score: Math.floor(Math.random() * 100),
          question: faker.lorem.sentences(),
          answer: faker.lorem.sentences(),
          timestamp: faker.date.recent()
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
