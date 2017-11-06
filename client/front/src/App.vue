<template>
  <div id="app">
    <Top></Top>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components:{
    Top,
    Footer
  }
}
</script>

<style lang="stylus">
@import "./assets/stylus/themecolor.styl"

#app
  display flex
  flex-direction column
  justify-content space-between
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 20px
a
  text-decoration none 
  font-weight bold
  color secondary-color
a:hover
  background primary-color
</style>

