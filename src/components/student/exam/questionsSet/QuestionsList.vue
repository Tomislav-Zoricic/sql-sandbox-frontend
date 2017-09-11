<template lang="html">
  <table class="table is-striped">
    <tr
      v-for="question in questions"
      class="is-primary">
        <td>
          {{question.content}}
        </td>
    </tr>
  </table>
</template>

<script>
export default {
  data () {
    return {
      questions : [
        {
          'rank': 'easy',
          'content': `Test content ${Math.random() * 100}`,
          'answer' : `Answer content ${Math.random() * 100}`
        },
        {
          'rank': 'easy',
          'content': `Test content ${Math.random() * 100}`,
          'answer' : `Answer content ${Math.random() * 100}`
        },
        {
          'rank': 'medium',
          'content': `Test content ${Math.random() * 100}`,
          'answer' : `Answer content ${Math.random() * 100}`
        },
        {
          'rank': 'medium',
          'content': `Test content ${Math.random() * 100}`,
          'answer' : `Answer content ${Math.random() * 100}`
        },
        {
          'rank': 'hard',
          'content': `Test content ${Math.random() * 100}`,
          'answer' : `Answer content ${Math.random() * 100}`
        },
        {
          'rank': 'hard',
          'content': `Test content ${Math.random() * 100}`,
          'answer' : `Answer content ${Math.random() * 100}`
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
