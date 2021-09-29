<template>
  <div class="FinishBoard">
    <h3>{{ title }}</h3>
    <div v-for="(row, index) in ironmanData" :key="index">
      <TaskCard v-if="status" :memberInfo="row" />
    </div>
  </div>
</template>
<script>
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
    status: {
      required: true,
      type: Boolean,
    },
    ironmanData: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.FinishBoard {
  flex: 1 0 0;
  min-height: 100vh;
  h3 {
    color: #63677f;
  }
}
</style>
