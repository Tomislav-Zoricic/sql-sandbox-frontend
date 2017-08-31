<template lang="html">
<div class="box">
  <article class="media">

    <div class="media-content">
      <div class="content">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Rank</p>
              <p class="title">{{uppercaseFirstLetter(rank)}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Selected</p>
              <p class="title">{{questions.length || 0}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Out of</p>
              <p class="title">{{numberOfQuestions}}</p>
            </div>
          </div>
        </nav>

        <hr>

        <table class="table is-striped">
          <tbody>
            <tr v-for="q in questions"
                @click="unselectQuestion(q)">
              <td>{{q.question}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
