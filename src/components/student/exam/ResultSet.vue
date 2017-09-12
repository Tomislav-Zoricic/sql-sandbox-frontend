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
      <div class="columns">
        <div class="column">
          <table class="table">
            <thead>
              <th>id</th>
              <th>name</th>
              <th>engine</th>
              <th>speed</th>
              <th>miles</th>
            </thead>
            <tr v-for="i in 10">
              <td>{{i}}</td>
              <td>{{carsName[Math.round(Math.random()*3) + 0]}}</td>
              <td>{{carsEngine[Math.round(Math.random()*2) + 0]}}</td>
              <td>{{carsSpeed[Math.round(Math.random()*3) + 0]}}</td>
              <td>{{carsMiles[Math.round(Math.random()*3) + 0]}}</td>
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
      carsName: ['ford', 'mazda', 'suzuki', 'yugo'],
      carsEngine: ['127-kilowatt electric motor', '100-kW Fuel Cell', '2.0-liter Turbocharged H-4'],
      carsSpeed: [210, 315, 185, 200],
      carsMiles: [150000, 23000, 54440, 1000000],
      score: 94.6,
      answer: 'Select * from cars where date_created >= 2017-01-01 and kilometres > 100000'
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
