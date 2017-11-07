<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components:{
  }
}
</script>

<style lang="stylus">
@import "./assets/stylus/themecolor.styl"
body
    margin 0
#app
  display flex
  flex-direction column
  justify-content space-between
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
a
  text-decoration none 
  font-weight bold
  color secondary-color
a:hover
  background primary-color
</style>

