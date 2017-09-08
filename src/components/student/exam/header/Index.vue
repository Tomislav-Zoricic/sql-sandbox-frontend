<template lang="html">
<nav class="navbar ">

  <div id="menu" class="navbar-menu">
    <div class="navbar-start">
      <div
        class="navbar-item is-clickable"
        v-show="hasNotifications"
        @click="showNotifications">
        <div class="field">
          <p class="control">
            <span class="icon is-large"><i class="fa fa-bell-o"></i></span>
          </p>
        </div>
      </div>
      <div class="navbar-item">
        <div class="field">
          <p class="control">
            {{student}}
          </p>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field">
          <p class="control">
              Results: {{questionsCorrect}} / {{questionsTotal}}
          </p>
        </div>
      </div>
      <div class="navbar-item">
        <div class="field">
          <p class="control">
            Time left: {{timeLeft}}
          </p>
        </div>
      </div>
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-flag"></i>
              </span>
              <span>Finish</span>
            </a>
          </p>
        </div>
      </div>
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
</style>
