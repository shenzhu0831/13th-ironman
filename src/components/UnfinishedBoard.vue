<template>
  <div class="UnfinishedBoard">
    <h3>{{ title }}</h3>
    <transition-group name="flip-list" tag="div">
      <div class="flip-list-move" v-for="row in ironmanData" :key="row.name">
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

.flip-list-move {
  transition: transform 1s;
}
</style>
