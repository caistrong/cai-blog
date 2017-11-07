<template>
    <header>
        <div @click="GotoHello">
            <img src="../../assets/logo.png"></img>
            <h1>小葱</h1>
        </div>

        <ul>
            <li><router-link :to="{name:'Articlelist'}"><span>博客</span></router-link></li>
            <li><router-link :to="{name:'About'}"><span>关于</span></router-link></li>
        </ul>
    </header>
</template>
<script>
import router from '@/router'
export default {
  name:'Top',
  methods:{
      GotoHello:()=>{router.push({name:'Hello'})}
  }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/themecolor.styl"
header
    
    display flex
    justify-content space-around
    align-items center
    border-bottom 2px solid primary-color
    ul
        li
            margin-left 10px
            display inline
            list-style none
            a
                padding 5px
    h1 
        display inline
    img
        max-width 30px;
        max-height 30px;
</style>


