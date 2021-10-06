<template>
  <div class="StatusBoard">
    <h3>{{ title }}</h3>
    <transition-group name="flip-list" tag="div">
      <slot></slot>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "FinishBoard",
  components: {},
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.StatusBoard {
  flex: 1 0 0;
  h3 {
    color: #63677f;
  }
}
</style>
