<template>
  <div class="mvPlay">
    <h3>{{ $route.query.name }}</h3>
    <p>演唱者：{{ $route.query.singerName }}</p>
    <video :src="url" controls="controls" autoplay="autoplay"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  created() {
    this.$axios({
      url: "http://localhost:3000/mv/url?id=" + this.$route.query.id,
    }).then((res) => {
      console.log(res);
      this.url = res.data.data.url;
    });
  },
};
</script>

<style>
</style>