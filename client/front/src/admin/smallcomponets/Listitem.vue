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
li
    list-style none
    border 2px solid #999
li:visited
    background red

</style>
