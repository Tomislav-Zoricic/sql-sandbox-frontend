<template lang="html">
  <div class="">
      <div class="columns">
        <div class="column is-one-half">
          <h1 class="title">New notification</h1>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea is-medium" rows="10"></textarea>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary is-stretched is-large">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-half">
          <h1 class="title">History</h1>
          <div class="notifications-container">
            <div v-for="n in notifications" class="box">
              <p>
                <strong>{{n.timestamp}}</strong>
                <br>
                {{n.text}}
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import faker from 'faker'
export default {
  computed: {
    notifications () {
      return [...Array(27)].map(() => {
        return {
          timestamp: faker.date.recent(),
          text: faker.lorem.sentences()
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .is-stretched {
    display: flex;
  }

  .notifications-container {
    max-height: 100vh;
    overflow: auto;
    border: 1px solid;
  }
</style>
