<template>
    <el-container class="adminbody">
        <el-aside class="asidebar">
            <Listhead></Listhead>
            <ul>
                <Listitem v-for="item in articlesArr" v-bind:key="item.id" v-bind:article="item"></Listitem>
            </ul>
        </el-aside>
        <el-main class="mainbody">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import store from "@/store";
import Listitem from "./smallcomponets/Listitem";
import Listhead from "./smallcomponets/Listhead";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "admin",
  computed: {
    ...mapGetters(["articlesArr"])
  },
  methods: {
    ...mapActions(["getAllArticles"])
  },
  components: {
    Listitem,
    Listhead
  },
  created() {
    store.dispatch("getAllArticles");
  }
};
</script>

<style lang="stylus" scoped>
*{
    box-sizing border-box
}

.asidebar {
    border: 1px solid #ddd;
}
.mainbody{
    padding 0
}

ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

