<template lang="html">
  <div class="modal"
       :class="{'is-active': isActive === true}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <p class="title">
          Displaying URL Diagram
        </p>
        <p class="subtitle">
          {{urlDiagram}}
        </p>

        <hr>
        <img :src="urlDiagram" />
        <hr>

        <div class="field">
          <p class="control has-centered-content">
            <button class="button is-primary"
                    @click="toggle">OK</button>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import toastr from 'toastr'

export default {
  name: 'check-diagram-modal',

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      required: true
    },
    urlDiagram: {
      type: String,
      default: ''
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
