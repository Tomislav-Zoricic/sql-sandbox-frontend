<template lang="html">
  <div class="">
    <h1 class="title">Result</h1>

    <div class="result-set">
      <div
        class="is-clickable has-space"
        @click="changeTab('exam-questions-set')">
        <span class="icon is-large is-right">
          <i class="fa fa-times"></i>
        </span>
      </div>
      <div class="columns">
        <div class="column is-one-half">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Answer</p>
                  <p>{{answer}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-half">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Score</p>
                  <p>{{score}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns" v-show="this.resultSet.length">
        <div class="column">
          <table class="table">
            <thead>
              <th v-for="column in columns">{{column}}</th>
            </thead>
            <tr v-for="result in resultSet">
              <td v-for="feature in result">{{feature}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    changeTab: Function
  },

  data () {
    return {
      // NOTE Put load animation if answer isn't received yet.
      isWorking: false,
      resultSet: [
        {
          id: 1,
          name: 'ford',
          engine: '127-kilowatt electric motor',
          speed: 180,
          miles: 1000000
        },
        {
          id: 2,
          name: 'mazda',
          engine: '2.0-liter Turbocharged H-4',
          speed: 220,
          miles: 235000
        },
        {
          id: 3,
          name: 'suzuki',
          engine: '100-kW Fuel Cell',
          speed: 210,
          miles: 150000
        },
        {
          id: 4,
          name: 'yugo',
          engine: '127-kilowatt electric motor',
          speed: 150,
          miles: 23000
        },
        {
          id: 5,
          name: 'volvo',
          engine: '100-kW Fuel Cell',
          speed: 315,
          miles: 150000
        }
      ],
      score: 94.6,
      answer: 'Select * from cars where date_created >= 2017-01-01 and kilometres > 100000'
    }
  },

  computed: {
    columns () {
      return this.resultSet.length ? Object.keys(this.resultSet[0]) : []
    }
  }
}
</script>

<style lang="scss" scoped>
  .result-set {
    border: 1px solid black;
  }

  .is-clickable {
    cursor: pointer;
    &:hover {
      background-color: #D3D3D3;
      color: red;
    }
  }

  .has-space {
    padding-top: 15px;
    padding-bottom: 15px;
  }
</style>
