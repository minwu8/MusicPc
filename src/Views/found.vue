<template>
  <div class="found">
    <h3>推荐音乐</h3>
    <song-table :arr="list" :types="type" />
  </div>
</template>

<script>
import songTable from "../components/songTable.vue";
export default {
  components: { songTable },
  data() {
    return {
      list: [],
      type: "music",
    };
  },
  created() {
    this.$axios({
      url: "http://localhost:3000/personalized/newsong",
    }).then((res) => {
      console.log(res);
      this.list = res.data.result;
    });
  },
};
</script>

<style>
</style>