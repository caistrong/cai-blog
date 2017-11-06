<template>
    <div class="block">
        <div class="block-head">
            <router-link :to="{ name: 'Article', params: { id: article.id }}">
               <h2> {{article.title}} </h2>
            </router-link>
            <p>{{article.creatTime}}</p>
        </div>
        <div class="block-content">    
            <p>{{article.summary}}</p>
        </div>
        <div class="block-foot">
            <router-link :to="{ name: 'Article', params: { id: article.id }}">
                继续阅读
            </router-link>
        </div>
    </div>  
</template>
<script>
export default {
    props:{
        article:{
            type:Object,
            required:true
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/themecolor.styl"

.block
    box-shadow 0 0 5px black
    border-radius 5px
    display flex
    flex-direction column
    width 70%
    margin auto
    padding 8px
    .block-head
        position relative
        height 40px
        h2
            margin 0
            position absolute
            top 5px
            left 5px
        p  
            position absolute
            right 5px
            color #a5a5a5
    .block-content
        font-size 14px

</style>
