<template lang="html">
  <nav class="panel">
    <p class="panel-heading"
       v-if="title">
      <router-link :to="{ name: generalRoute }">{{title}}</router-link>
    </p>
    <div class="panel-block">
      <div class="control has-icons-left">
        <input class="input is-medium"
               type="text"
               placeholder="Search"
               v-model="search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </div>
      <router-link
        v-if="create"
        :to="{ name: generalRoute, exact: true }"
        class="button is-primary is-outlined has-input-left">
        <span class="icon is-medium is-left">
          <i class="fa fa-plus"></i>
        </span>
      </router-link>
    </div>

    <router-link
      v-for="item in filteredItems"
      class="panel-block"
      :key="item.id"
      :to="{ name: detailRoute, params: { id: item.id} }">
        {{setName(item)}}
    </router-link>

    <div class="panel-block" v-if="hasElementsLeft">
      <button
        class="button is-primary is-outlined is-fullwidth"
        @click="loadMoreElements">
          See more
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      required: true
    },
    generalRoute: {
      type: String
    },
    detailRoute: {
      type: String,
      required: true
    },
    setName: {
      type: Function,
      required: true
    },
    create: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      search: '',
      displayMax: 2,
      displayStep: 2
    }
  },

  computed: {
    filteredItems () {
      // NOTE Ovo je sve zajedno bezveze napisano iako radi sto treba
      // trebalo bi za pocetak iz primljenog arraya napraviti novi Array
      // sa set nameom i id-om, posto su te dvije stvari jedine bitne,
      // i onda po njima iterirati da ne vrti sest puta iznova setName()
      return this.items.slice(0, this.displayMax).filter(item => {
        return this.setName(item)
              .toLowerCase()
              .includes(this.search.toLowerCase())
      })
    },

    hasElementsLeft () {
      return this.displayMax < this.items.length
    }
  },

  methods: {
    loadMoreElements () {
      this.displayMax += this.displayStep
    }
  }
}
</script>

<style lang="scss" scoped>
  $col: #00D1B2;
  $col2: #F5F5F5;
  .router-link-active {
    background-color: $col;
    color: $col2;

    &:hover {
      background-color: $col;
      color: $col2;
    }
  }

  .has-input-left {
    margin-left: 10px;
  }
</style>
