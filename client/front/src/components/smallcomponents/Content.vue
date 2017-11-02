<template>
    <div>
        <button @click="getContent">获取</button>
        <ul v-for="article in articlesArr" v-bind:key="article.id">
            <li>{{article.content}}</li>
            <p>{{article.createTime}}</p>
        </ul>
    </div>
</template>
<script>
import store from '@/store'

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
        getContent(){
            console.log('点击事件触发')
            store.dispatch('getAllArticles')
        }
  }
}
</script>
<style lang="stylus" scoped>
div
    flex 3
    height 600px
    background #ebeb5f
</style>
