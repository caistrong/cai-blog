<template>
    <div>
        <Articletitle :title="article.title"></Articletitle>
        <Mdeditor></Mdeditor>
    </div>
</template>

<script>
import store from '@/store'
import Articletitle from './smallcomponets/Articletitle'
import Mdeditor from './smallcomponets/Mdeditor'
import {mapGetters,mapActions} from 'vuex'

export default {
  computed:{
      ...mapGetters([
        'article'
      ])
  },
  components:{
      Articletitle,
      Mdeditor
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
