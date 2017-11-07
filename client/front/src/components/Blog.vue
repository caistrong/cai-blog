<template>
    <div>
        <Top></Top>
        <!-- <Sidebar class="sidebar"></Sidebar> -->
        <router-view></router-view>
        <!-- <Articlelist class="articlelist"></Articlelist> -->
        <Footer></Footer>
    </div>
</template>
<script>
import Top from './smallcomponents/Top.vue'
import Footer from './smallcomponents/Footer.vue'

// import Sidebar from './smallcomponents/Sidebar.vue'
import Articlelist from './Articlelist.vue'

export default {
  name:'Blog',
  components:{
      Top,
      Footer,
    //   Sidebar,
      Articlelist
  }
}
</script>
<style lang="stylus" scoped>
div
    display flex
    flex-direction column

</style>
