<template>
  <div
    class="
      el-table
      el-table--fit
      el-table--enable-row-hover
      el-table--enable-row-transition
    "
    style="width: 100%"
  >
    <div class="el-table__header-wrapper">
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        class="el-table__header"
        style="width: 531px"
      >
        <colgroup>
          <col name="el-table_1_column_1" width="48" />
          <col name="el-table_1_column_2" width="120" />
          <col name="el-table_1_column_3" width="101" />
          <col name="el-table_1_column_4" width="101" />
          <col name="el-table_1_column_5" width="101" />
          <col name="el-table_1_column_6" width="60" />
          <col name="gutter" width="0" />
        </colgroup>
        <thead class="has-gutter">
          <tr class="">
            <th
              colspan="1"
              rowspan="1"
              class="el-table_1_column_1 is-leaf"
              style="text-align: center"
            >
              <div class="cell">序号</div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              class="el-table_1_column_2 is-leaf"
              style="text-align: center"
            >
              <div class="cell">封面</div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              class="el-table_1_column_3 is-leaf"
              style="text-align: center"
            >
              <div class="cell">音乐标题</div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              class="el-table_1_column_4 is-leaf"
              style="text-align: center"
            >
              <div class="cell">歌手</div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              class="el-table_1_column_5 is-leaf"
              style="text-align: center"
            >
              <div class="cell">专辑</div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              class="el-table_1_column_6 is-leaf"
              style="text-align: center"
            >
              <div class="cell">时长</div>
            </th>
            <th class="gutter" style="width: 0px; display: none"></th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="el-table__body-wrapper is-scrolling-none">
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        class="el-table__body"
        style="width: 531px"
      >
        <colgroup>
          <col name="el-table_1_column_1" width="48" />
          <col name="el-table_1_column_2" width="120" />
          <col name="el-table_1_column_3" width="101" />
          <col name="el-table_1_column_4" width="101" />
          <col name="el-table_1_column_5" width="101" />
          <col name="el-table_1_column_6" width="60" />
        </colgroup>
        <tbody>
          <tr
            class="el-table__row"
            v-for="(item, index) in arr"
            :key="item.id"
            @click="toPlay(item)"
          >
            <td
              rowspan="1"
              colspan="1"
              class="el-table_1_column_1"
              style="text-align: center"
            >
              <div class="cell">
                <div>{{ index + 1 }}</div>
              </div>
            </td>
            <td
              rowspan="1"
              colspan="1"
              class="el-table_1_column_2"
              style="text-align: center"
            >
              <div class="cell">
                <img :src="item.picUrl" alt="" class="coverPic" />
              </div>
            </td>
            <td
              rowspan="1"
              colspan="1"
              class="el-table_1_column_3"
              style="text-align: center"
            >
              <div class="cell">{{ item.name }}</div>
            </td>
            <td
              rowspan="1"
              colspan="1"
              class="el-table_1_column_4"
              style="text-align: center"
            >
              <div class="cell">{{ item.song.artists | formatAr }}</div>
            </td>
            <td
              rowspan="1"
              colspan="1"
              class="el-table_1_column_5"
              style="text-align: center"
            >
              <div class="cell">{{ item.song.album.name }}</div>
            </td>
            <td
              rowspan="1"
              colspan="1"
              class="el-table_1_column_6"
              style="text-align: center"
            >
              <div class="cell">
                <div>{{ item.song.duration | formatTime }}</div>
              </div>
            </td>
          </tr>
          <!---->
        </tbody>
      </table>
      <!----><!---->
    </div>
    <!----><!----><!----><!---->
    <div class="el-table__column-resize-proxy" style="display: none"></div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    arr: Array,
    types: String,
  },
  filters: {
    formatAr(val) {
      let arr = val.map((item) => item.name);
      // console.log(arr);
      return arr.join(" & ");
    },
    formatTime(val) {
      return moment(val).format("mm:ss");
    },
  },
  methods: {
    toPlay(row) {
      let singName = row.song.artists.map((item) => item.name);
      // 编程式导航传值
      this.$router.push({
        path: this.types == "music" ? "/musicPlay" : "mvPlay",
        query: {
          id: row.id,
          name: row.name,
          singerName: singName.join(" & "),
          picUrl: row.picUrl,
        },
      });
    },
  },
};
</script>

<style>
</style>