<template>
  <ul role="menubar" class="el-menu-vertical-demo el-menu">
    <li
      role="menuitem"
      tabindex="-1"
      class="el-menu-item is-active"
      style="padding-left: 20px"
      @click="$router.push('/found')"
    >
      <i class="el-icon-search"></i><span>发现音乐</span>
    </li>
    <li
      role="menuitem"
      tabindex="-1"
      class="el-menu-item"
      style="padding-left: 20px"
      @click="$router.push('/newMusic')"
    >
      <i class="el-icon-tickets"></i><span>最新音乐</span>
    </li>
    <li
      role="menuitem"
      tabindex="-1"
      class="el-menu-item"
      style="padding-left: 20px"
      @click="$router.push('/newMv')"
    >
      <i class="el-icon-video-camera"></i><span>最新MV</span>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>