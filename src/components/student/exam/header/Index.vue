<template lang="html">
  <nav class="level is-mobile">
    <div class="level-item has-text-centered is-clickable"
      :class="{ 'has-notifications': hasNotifications }"
      @click="showNotifications">
      <div>
        <p class="heading">Notifications</p>
        <p class="title">
          <span class="icon is-large" v-show="hasNotifications">
            <i class="fa fa-bell-o"></i>
          </span>
          <span class="icon is-large" v-show="!hasNotifications">
            <i class="fa fa-bell-slash-o"></i>
          </span>
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Student</p>
        <p class="title">{{student}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Results</p>
        <p class="title">{{questionsCorrect}} / {{questionsTotal}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Time left</p>
        <p class="title">{{timeLeft}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered is-clickable">
      <div>
        <p class="heading">Finish test</p>
        <p class="title">
          <span class="icon is-large"><i class="fa fa-flag-checkered"></i></span>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
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
  .is-clickable {
    cursor: pointer;
  }

  .has-notifications {
    /* NOTE Do something to make having notification more noticable */
  }
</style>
