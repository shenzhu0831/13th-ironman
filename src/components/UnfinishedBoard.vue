<template>
  <div class="UnfinishedBoard">
    <h3>{{ title }}</h3>
    <TaskCard v-if="status" />
  </div>
</template>
<script>
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
    status: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {};
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
