<template>
  <section class="el-container container is-vertical">
    <header class="el-header header" style="height: 80px">
      那片绿绿的云音乐
    </header>
    <section class="el-container">
      <aside class="el-aside aside" style="width: 200px">
        <!-- 左侧菜单区域 -->
        <MusicMenu></MusicMenu>
      </aside>
      <main class="el-main main">
        <!-- 内容区域 -->
        <!-- 路由的显示区域 -->
        <router-view></router-view>
      </main>
    </section>
  </section>
</template>

<script>
import MusicMenu from "./Views/musicMenu.vue";
export default {
  components: {
    MusicMenu,
  },
};
</script>

<style>
</style>