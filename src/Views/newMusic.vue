<template>
  <div class="newMusic">
    <input
      type="text"
      class="search_input"
      placeholder="请输入要搜索的歌曲名"
      v-model="key"
      @keyup.enter="search"
    />
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
      key: "",
    };
  },
  created() {
    this.$axios({
      url: "http://localhost:3000/personalized/newsong?dsadsa",
    }).then((res) => {
      // console.log(res);
      this.list = res.data.result;
    });
  },
  //搜索功能
  methods: {
    search() {
      this.$axios({
        url: "http://localhost:3000/search?keywords=" + this.key,
      }).then((res) => {
        console.log(res);
        this.list = res.data.result.songs;
        this.list.forEach((item) => {
          item.song = {
            artists: item.artists,
            album: item.album,
            duration: item.duration,
          };
          item.picUrl = item.artists[0].img1v1Url;
        });
      });
    },
  },
};
</script>

<style>
</style>