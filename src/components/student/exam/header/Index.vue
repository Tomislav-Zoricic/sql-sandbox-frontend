<template lang="html">
  <nav class="level">
    <p class="level-item has-text-centered"
      v-bind:class="{ 'has-notifications': hasNotifications }"
       @click="showNotifications">
      <a class="link is-info">
        <span class="icon is-large"><i class="fa fa-bell-o"></i></span>
      </a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">
        {{student}}
      </a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">
        Results: {{questionsCorrect}} / {{questionsTotal}}
      </a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">
        Time left: {{timeLeft}}
      </a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info">
        <a class="button is-primary">
          <span class="icon">
            <i class="fa fa-flag"></i>
          </span>
          <span>Finish</span>
        </a>
      </a>
    </p>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      testName: 'Default test name',
      student: 'Tomislav Zoricic',
      timeLeftSeconds: 2821,
      questionsTotal: 6,
      questionsCorrect: 1,
      hasNotifications: true,
      notification: {
        title: 'Notification',
        text: 'Notification text'
      }
    }
  },

  computed: {
    // NOTE use package like
    // https://www.npmjs.com/package/pretty-seconds
    // or
    // https://www.npmjs.com/package/sec-to-min
    // with this.timeLeftSeconds
    timeLeft () {
      return '42:23'
    }
  },

  methods: {
    showNotifications () {
      console.log('Multiple notifications present, think about that case')
    }
  }
}
</script>

<style lang="css">
  .has-notifications {
    background-color: red;
    color: red;
  }
</style>
