<template lang="html">
  <div class="modal"
       :class="{'is-active': isActive === true}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <p class="title">
          Database change
        </p>
        <hr>
        <p>Changing the database will drop all already selected question</p>
        <p>Proceed?</p>
        <hr>

        <div class="field">
          <p class="control has-centered-content">
            <button class="button is-primary" @click="toggle">Yes</button>
            <button class="button is-danger" @click="toggle">No</button>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'change-database-modal',

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
  .has-centered-content {
    display: flex;
    justify-content: center;
  }
</style>
