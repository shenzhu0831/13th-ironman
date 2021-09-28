<template>
  <div class="home">
    <div class="header">
      <h1 class="logo">
        <img src="@/assets/image/main-logo-goodideas@3x.png" alt="logo" />
      </h1>
      <h2 class="title">
        <span>第13屆IT邦幫忙鐵人賽</span> <span>好想工作室v5.0</span>
      </h2>
    </div>
    <main class="main">
      <TabsBar />
    </main>
  </div>
</template>
<script>
import TabsBar from "@/components/TabsBar.vue";
export default {
  name: "Home",
  components: {
    TabsBar,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 180px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .title {
    margin: 0;
    font-size: 20px;
    span {
      &:first-of-type {
        color: #63677f;
      }
      &:last-of-type {
        color: #7dd69c;
      }
    }
  }
}

.main {
  // padding: 45px;
}
</style>
