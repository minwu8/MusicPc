<template>
  <div class="newMv">
    <input
      type="text"
      class="search_input"
      placeholder="请输入要搜索的歌曲名"
      v-model="key"
      @keyup.enter="search"
    />
    <song-table :arr="list" />
  </div>
</template>

<script>
import songTable from "../components/songTable.vue";
export default {
  components: { songTable },
  data() {
    return {
      list: [],
      key: "",
    };
  },
  created() {
    this.$axios({
      url: "http://localhost:3000/mv/all?sdfsdfds",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
      this.list.forEach((item) => {
        item.song = {
          artists: item.artists,
          album: {
            name: item.name,
          },
          duration: item.duration,
        };
        item.picUrl = item.cover;
      });
    });
  },
  methods: {
    search() {
      this.$axios({
        url: "http://localhost:3000/search?type=1004&keywords=" + this.key,
      }).then((res) => {
        console.log(res);
        this.list = res.data.result.mvs;
        this.list.forEach((item) => {
          item.song = {
            artists: item.artists,
            album: {
              name: item.name,
            },
            duration: item.duration,
          };
          item.picUrl = item.cover;
        });
      });
    },
  },
};
</script>

<style>
</style>