<template>
    <div class="wrap">
        <ul v-for="article in articlesArr" v-bind:key="article.id">
            <Articleblock v-bind:article="article"></Articleblock>
        </ul>
    </div>
</template>
<script>
import store from '@/store'
import Articleblock from './smallcomponents/Articleblock'

import {mapGetters,mapActions} from 'vuex'

export default {
  name:'Content',
  computed:{
    ...mapGetters([
        'articlesArr'
    ])  
  },
  methods:{
        ...mapActions([
            'getAllArticles'
        ]),
  },
  components:{
      Articleblock
  },
  created(){
      store.dispatch('getAllArticles')
  }
}
</script>
<style lang="stylus" scoped>
.wrap
    display flex
    flex-direction column
    flex 4
    height 600px
    ul 
        padding 0
</style>
