<template lang="html">
  <div class="">
    <template lang="html">
      <div class="">
        <div class="columns">
          <div class="column">
            <div class="tabs is-centered is-large">
              <ul>
                <li @click="tab='testDetails'"
                  :class="{ 'is-active': isDetailsTab }">
                  <a>
                    <span class="icon is-small"><i class="fa fa-info-circle"></i></span>
                    <span>Details</span>
                  </a>
                </li>
                <li @click="tab='testQuestions'"
                  :class="{ 'is-active': isQuestionsTab }">
                  <a>
                    <span class="icon is-small"><i class="fa fa-question-circle"></i></span>
                    <span>Questions</span>
                  </a>
                </li>
                <li @click="tab='testStudents'"
                  :class="{ 'is-active': isStudentsTab }">
                  <a>
                    <span class="icon is-small"><i class="fa fa-users"></i></span>
                    <span>Students</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <component
          :is="tab">
        </component>
      </div>
    </template>

    individual test details {{this.$route.params.id}}
  </div>
</template>

<script>
import Details from './Details'
import Questions from './Questions'
import Students from './Students'

export default {
  data () {
    return {
      tab: 'testDetails',
      selectedQuestions: []
    }
  },

  components: {
    'testQuestions': Questions,
    'testStudents': Students,
    'testDetails': Details
  },

  computed: {
    isDetailsTab () { return this.tab === 'testDetails' },
    isQuestionsTab () { return this.tab === 'testQuestions' },
    isStudentsTab () { return this.tab === 'testStudents' }
  },
}
</script>

<style lang="css">
</style>
