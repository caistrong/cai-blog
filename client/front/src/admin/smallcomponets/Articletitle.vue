<template>
    <div class="title">
        <h2>{{title}}</h2>
        <button>发布文章</button>
    </div>  
</template>

<script>
export default {
  props:['title']
}
</script>

<style lang="stylus" scoped>
.title
    box-sizing border-box
    height 50px
    overflow hidden
    display flex
    justify-content space-between
    align-items center
    padding 8px 16px
    border 1px solid #ddd;
    h2 
        margin 0
    
</style>
