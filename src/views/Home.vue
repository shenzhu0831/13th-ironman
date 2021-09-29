<template>
  <div class="home">
    <div class="header">
      <h1 class="logo">
        <img src="@/assets/image/main-logo-goodideas@3x.png" alt="logo" />
      </h1>
      <h2 class="title">
        <span>第13屆IT邦幫忙鐵人賽</span> <span>好想工作室v5.0</span>
        <div class="competing_time">
          <span class="counter">{{ deadline }}</span>
        </div>
      </h2>
    </div>
    <main class="main">
      <TabsBar />
    </main>
  </div>
</template>
<script>
import dayjs from "dayjs";

import TabsBar from "@/components/TabsBar.vue";
export default {
  name: "Home",
  components: {
    TabsBar,
  },
  data() {
    return {
      deadline: "",
    };
  },
  created() {
    this.deadline = this.getCountdownTime();
    setInterval(() => {
      // 每秒執行一次
      this.deadline = this.getCountdownTime();
    }, 1000);
  },
  methods: {
    getCountdownTime() {
      const deadline = dayjs("2021-10-16 00:00:00");
      const now = dayjs();

      let dayDiff = deadline.diff(now, "day");
      let hoursDiff = now.format("HH");
      let minDiff = now.format("mm");
      let secDiff = now.format("ss");

      return `比賽倒數： 
              ${dayDiff} 天 
              ${24 - hoursDiff} 時
              ${60 - minDiff} 分
              ${60 - secDiff} 秒`;
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include media(md) {
    padding: 30px 80px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
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
    .competing_time {
      width: 100%;
      padding: 5px;
      margin-top: 8px;
      text-align: center;
      background-color: #7dd69c;
      .counter {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
