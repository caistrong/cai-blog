<template>
    <div>
        <Sidebar class="sidebar"></Sidebar>
        <Articlelist class="articlelist"></Articlelist>
    </div>
</template>
<script>
import Sidebar from './smallcomponents/Sidebar.vue'
import Articlelist from './smallcomponents/Articlelist.vue'

export default {
  name:'Blog',
  components:{
      Sidebar,
      Articlelist
  }
}
</script>
<style lang="stylus" scoped>
div
    display flex

</style>
