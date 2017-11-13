<template>
  <h1>{{article.title}}</h1>
</template>

<script>
import store from '@/store'

import {mapGetters,mapActions} from 'vuex'

export default {
  computed:{
      ...mapGetters([
        'article'
      ])
  },
  methods:{
      ...mapActions([
        'getArticle'
      ]),
      fetchData(){
          store.dispatch('getArticle',this.$route.params.id)
      }
  },
  watch:{
      '$route':'fetchData'
  },
  created(){
      this.fetchData()
  }
}
</script>
