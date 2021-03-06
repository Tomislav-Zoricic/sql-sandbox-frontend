/<template lang="html">
<div class="">
  <tabs :tab="tab" :setActiveTab="setActiveTab"></tabs>
  <div class="columns">
    <div class="column is-10 is-offset-1">
      <component
        :is="tab"
        :database="database"
        :questions="databaseQuestions"
        :setDataValidation="setDataValidation">
      </component>
    </div>
  </div>
  <hr>
  <div class="field">
    <p class="control">
      <a class="button is-primary is-outlined is-stretched"
         :disabled="!this.dataValid"
         @click="updateDatabase">
          Update Database
      </a>
    </p>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tabs from './Tabs'
import List from './../../common/List'
import Details from './Details'
import Questions from './../questions/Questions'
import Stats from './Stats'
import Options from './Options'
import eventBus from './../../../eventBus'

export default {
  name: 'details',

  data () {
    return {
      tab: 'databaseDetails',
      dataValid: true
    }
  },

  components: {
    tabs: Tabs,
    list: List,
    'databaseDetails': Details,
    'databaseQuestions': Questions,
    'databaseStats': Stats,
    'databaseOptions': Options
  },

  computed: {
    ...mapGetters({
      databases: 'databases/databases',
      questions: 'databases/questions'
    }),

    isDetailsTab () { return this.tab === 'databaseDetails' },
    isQuestionsTab () { return this.tab === 'databaseQuestions' },
    isStatsTab () { return this.tab === 'databaseStats' },
    isOptionsTab () { return this.tab === 'databaseOptions' },
    database () {
      const id = parseInt(this.$route.params.id, 10)
      if (this.databases.length) {
        // Check whether exists?
        const database = this.databases.filter(db => db.id === id)[0]
        return database
      }
      // Database not found.
      return { name: 'Database' }
    },
    databaseQuestions () {
      const id = parseInt(this.$route.params.id, 10)
      return this.questions[id] ? this.questions[id] : []
    }
  },

  methods: {
    setActiveTab (tab) { this.tab = tab },
    setDataValidation (valid) { this.dataValid = valid },

    updateDatabase () {
      console.log('STUP Update database')
    }
  },

  beforeRouteLeave (to, from, next) {
    // NOTE Try including the same change to databaseDetails tab
    // when you change route param.
    this.tab = 'databaseDetails'

    next()
  },

  mounted() {
    const title = this.database.name
    const subtitle = 'Display your databases using list or icon display'
    eventBus.$emit('databases:changeInfo', title, subtitle)
  }
}
</script>

<style lang="scss" scoped>
  .is-stretched {
    display: flex;
  }
</style>
