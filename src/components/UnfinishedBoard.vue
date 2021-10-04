<template>
  <div class="UnfinishedBoard">
    <h3>{{ title }}</h3>
    <transition-group name="cell" tag="div">
      <div name="cell" v-for="row in items" :key="row.name">
        <TaskCard v-if="!checkPostTime(row.time)" :memberInfo="row" />
      </div>
    </transition-group>
  </div>
</template>
<script>
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

import TaskCard from "@/components/TaskCard.vue";
export default {
  name: "UnfinishedBoard",
  components: {
    TaskCard,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    ironmanData: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.items = this.ironmanData;
  },
  methods: {
    checkPostTime(time) {
      const now = dayjs();
      dayjs.extend(isToday);
      const donePost = dayjs(time).isToday(now, "day");
      return donePost;
    },
    // shuffle() {
    //   this.items = this.ironmanData.sort(() => Math.random() - 0.5);
    // },
  },
};
</script>
<style lang="scss" scoped>
.UnfinishedBoard {
  flex: 1 0 0;
  h3 {
    color: #63677f;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  // width: 500px;
  margin-top: 10px;
}

.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}

.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>
