<template>
  <div class="article">
      <h1>{{article.title}}</h1>
      <p>{{article.createTime}}</p>
      <div>
        <p>{{article.summary}}</p>
        <p>{{article.content}}</p>
      </div>
  </div>
</template>

<script>
import store from '@/store'

import {mapGetters,mapActions} from 'vuex'

export default {
  name:'article',
  computed:{
      ...mapGetters([
        'article'
      ])
  },
  methods:{
      ...mapActions([
        'getArticle'
      ])
  },
  mounted(){
    store.dispatch('getArticle',this.$route.params.id)
    console.log('mounted 钩子ok')
  }
}
</script>

<style lang="stylus" scoped>

</style>
