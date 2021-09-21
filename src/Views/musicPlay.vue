<template>
  <div class="musicPlay">
    <h3>{{ $route.query.name }}</h3>
    <p>演唱者：{{ $route.query.singerName }}</p>
    <img :src="$route.query.picUrl" alt="" class="coverPic" /><audio
      :src="url"
      controls="controls"
      autoplay="autoplay"
    ></audio>
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
      url: "http://localhost:3000/song/url?id=" + this.$route.query.id,
    }).then((res) => {
      // console.log(res);
      this.url = res.data.data[0].url;
    });
  },
};
</script>

<style>
</style>