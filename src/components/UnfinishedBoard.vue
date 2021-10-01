<template>
  <div class="UnfinishedBoard">
    <h3>{{ title }}</h3>
    <div v-for="(row, index) in ironmanData" :key="index">
      <TaskCard v-if="!checkPostTime(row.time)" :memberInfo="row" />
    </div>
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
    return {};
  },
  methods: {
    checkPostTime(time) {
      const now = dayjs();
      dayjs.extend(isToday);
      const donePost = dayjs(time).isToday(now, "day");
      return donePost;
    },
  },
};
</script>
<style lang="scss" scoped>
.UnfinishedBoard {
  flex: 1 0 0;
  min-height: 100vh;
  h3 {
    color: #63677f;
  }
}
</style>
