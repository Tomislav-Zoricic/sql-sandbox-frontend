<template lang="html">
  <div class="">
    <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
    <control-bar
      :changeSearch="changeSearch"
      :changeYear="changeYear"
      :academicYears="academicYears">
    </control-bar>
    <hr />

    <icons-display
      v-show="isIconsDisplay"
     :students="nameFilteredStudents">
    </icons-display>
    <list-display
      v-show="!isIconsDisplay"
     :students="nameFilteredStudents">
    </list-display>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tabs from './Tabs'
import ControlBar from './ControlBar'
import IconsDisplay from './displays/IconsDisplay'
import ListDisplay from './displays/ListDisplay'
import eventBus from './../../../../eventBus'

export default {

  data() {
    return {
      tab: 'iconsDisplay',
      search: '',
      academicYear: 2017,
      academicYears: [ 2017, 2016, 2015, 2014]
    }
  },

  components: {
    'tabs': Tabs,
    'control-bar': ControlBar,
    'icons-display': IconsDisplay,
    'list-display': ListDisplay
  },

  computed: {
    ...mapGetters ([
      'students'
    ]),

    acFilteredStudents () {
      const academicYear = parseInt(this.academicYear, 10)
      return this.students.filter(student => student.academic_year === academicYear)
    },

    nameFilteredStudents () {
      return this.acFilteredStudents.filter(({ first_name, last_name }) => {
        name = (first_name + last_name).toLowerCase()
        return name.includes(this.search)
      })
    },

    isIconsDisplay () {
        return this.tab === 'iconsDisplay'
    }
  },

  methods: {
    setActiveTab (tab) { this.tab = tab },

    changeSearch ({ target }) {
      this.search = target.value
    },

    changeYear ({ target }) {
      this.academicYear = target.value
    },

    setAcademicYears() {
      const years = new Set()
      this.students.forEach(student => years.add(student.academic_year))
      return Array.from(years)
    }
  },

  mounted () {
    this.academicYears = this.setAcademicYears()
  }
}
</script>

<style lang="css">
</style>
