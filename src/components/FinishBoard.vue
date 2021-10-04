<template>
  <div class="FinishBoard">
    <h3>{{ title }}</h3>
    <div v-for="(row, index) in ironmanData" :key="index">
      <TaskCard v-if="checkPostTime(row.time)" :memberInfo="row" />
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

import TaskCard from "@/components/TaskCard.vue";
export default {
  name: "FinishBoard",
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
.FinishBoard {
  flex: 1 0 0;
  h3 {
    color: #63677f;
  }
}
</style>
