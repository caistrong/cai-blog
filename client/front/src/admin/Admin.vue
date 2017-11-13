<template>
  <el-container class="wrap">
      <el-aside class="asidebar">
          <Listhead></Listhead>
          <ul v-for="item in articlesArr" v-bind:key="item.id">
              <Listitem v-bind:article="item"></Listitem>
          </ul>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
  </el-container>
</template>

<script>
import store from '@/store'
import Listitem from './smallcomponets/Listitem'
import Listhead from './smallcomponets/Listhead'
import {mapGetters,mapActions} from 'vuex'

export default {
  name:'admin',
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
    Listitem,
    Listhead
  },
  mounted(){
      store.dispatch('getAllArticles')
  }
}
</script>

<style lang="stylus" scoped>

</style>

