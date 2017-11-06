<template>
    <div>
        <img src="../../assets/touxiang.jpg"/>
    </div>
</template>
<script>
export default {
  name:'Sidebar'
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/themecolor.styl"

div
    flex:1
    border-right 2px solid primary-color
    img
        margin auto
        width 150px
        height 150px
        border-radius 50%
        box-shadow 0 0 10px black

</style>
