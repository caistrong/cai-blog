<template>
    <li>
        <router-link :to="{ name:'AdminArticle',params:{ id: article.id} }">
            <h3>{{article.title}}</h3>
            <span>2017-11-11</span>
        </router-link>
    </li>
</template>

<script>
export default {
  props:{
      article:{
          type:Object,
          require:true
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/themecolor.styl';

li
    width 80%
    list-style none
    border-bottom 1px dotted #aaa
    cursor pointer
li:hover
    background-color primary-color


</style>
