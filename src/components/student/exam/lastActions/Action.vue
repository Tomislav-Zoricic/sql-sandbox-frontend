<template lang="html">
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{percentSolved}}% Solved</strong> <small>{{randomTime()}}</small>
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
      percentSolved: Math.floor(Math.random() * 100)
    }
  },

  methods: {
    randomTime() {
      const start = new Date('09-08-2017 10:30')
      const end = new Date('08-31-2017 12:00')

      const diff =  end.getTime() - start.getTime()
      const new_diff = diff * Math.random()
      const date = new Date(start.getTime() + new_diff)
      return moment(date, "YYYYMMDD").fromNow()
    }
  }
}
</script>

<style lang="css">
</style>
