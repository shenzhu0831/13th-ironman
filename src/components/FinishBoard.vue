<template>
  <div class="FinishBoard">
    <h3>{{ title }}</h3>
    <transition-group name="cell" tag="div">
      <div v-for="(row, index) in ironmanData" :key="index">
        <TaskCard v-if="checkPostTime(row.time)" :memberInfo="row" />
      </div>
    </transition-group>
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
