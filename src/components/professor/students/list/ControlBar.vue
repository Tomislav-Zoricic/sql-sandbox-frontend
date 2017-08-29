<template lang="html">
  <div class="columns">
    <div class="column is-one-half">
      <div class="control">
        <input class="input is-medium"
               type="text"
               placeholder="Search"
               v-model="search"
               @input="changeSearch">
      </div>
    </div>
    <div class="column is-one-half">
      <div class="control school-year">
        <div class="select">
          <select v-model="academicYear" @change="changeYear">
            <option v-for="year in academicYears">{{year}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    changeSearch: {
      type: Function
    },
    changeYear : {
      type: Function
    },
    academicYears: {
      type: Array,
      default() {
        return [ 2017, 2016, 2015, 2014 ]
      }
    }
  },

  data () {
    return {
      search: '',
      // NOTE Remove magic number.
      academicYear: 2017
    }
  }
}
</script>

<style lang="css">
  /* NOTE Don't leave this like this. */
  .school-year {
    font-size: 21px;
    text-align: center;
  }
</style>
