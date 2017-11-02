<template>
    <div>
        <Sidebar class="sidebar"></Sidebar>
        <Content class="content"></Content>
    </div>
</template>
<script>
import Sidebar from './smallcomponents/Sidebar.vue'
import Content from './smallcomponents/Content.vue'

export default {
  name:'Blog',
  components:{
      Sidebar,
      Content
  }
}
</script>
<style lang="stylus" scoped>
div
    display flex

</style>
