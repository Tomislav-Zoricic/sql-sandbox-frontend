<template lang="html">
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{percentSolved}}% Solved</strong> <small>{{timeLeft}}</small>
          </p>
          <p>{{content}}</p>
          <p>{{answer}}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      content: 'Select all cars that are not older than 10 years and have more than 100k km.',
      answer: 'Select * from cars where date_created >= 2017-01-01 and kilometres > 100000',
      percentSolved: Math.floor(Math.random() * 100),
      timeLeft: this.randomTime()
    }
  },

  methods: {
    randomTime() {
      const start = new Date('09-08-2017 10:30')
      const end = new Date('08-31-2017 12:00')

      const diff =  end.getTime() - start.getTime()
      const newDiff = diff * Math.random()
      const date = new Date(start.getTime() + newDiff)
      return moment(date, "YYYYMMDD").fromNow()
    }
  }
}
</script>

<style lang="css">
</style>
