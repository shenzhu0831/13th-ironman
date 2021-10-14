<template>
  <div class="TabsBar">
    <div class="tabs_bar">
      <b-tabs content-class="mt-3" align="center" pills>
        <b-tab @click="sortData('web')" title="Web">
          <StatusBoard :title="'Unfinished'">
            <div v-for="item in webData" :key="item.name">
              <TaskCard v-if="!isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
          <StatusBoard :title="'Finished'">
            <div v-for="item in webData" :key="item.name">
              <TaskCard v-if="isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
        </b-tab>
        <b-tab @click="sortData('backend')" title="Backend">
          <StatusBoard :title="'Unfinished'">
            <div v-for="item in backendData" :key="item.name">
              <TaskCard v-if="!isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
          <StatusBoard :title="'Finished'">
            <div v-for="item in backendData" :key="item.name">
              <TaskCard v-if="isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
        </b-tab>
        <b-tab @click="sortData('ios')" title="iOS">
          <StatusBoard :title="'Unfinished'">
            <div v-for="item in iOSData" :key="item.name">
              <TaskCard v-if="!isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
          <StatusBoard :title="'Finished'">
            <div v-for="item in iOSData" :key="item.name">
              <TaskCard v-if="isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
        </b-tab>
        <b-tab @click="sortData('android')" title="Android">
          <StatusBoard :title="'Unfinished'">
            <div v-for="item in androidData" :key="item.name">
              <TaskCard v-if="!isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
          <StatusBoard :title="'Finished'">
            <div v-for="item in androidData" :key="item.name">
              <TaskCard v-if="isPosted(item.time)" :memberInfo="item" />
            </div>
          </StatusBoard>
        </b-tab>
        <div class="animation_control">
          <Firework v-if="showFirework" />
          <button @click="showFirework = true" class="firework_button">
            Firework
          </button>
        </div>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

import StatusBoard from "@/components/StatusBoard.vue";
import TaskCard from "@/components/TaskCard.vue";
import Firework from "@/components/Firework.vue";

export default {
  name: "TabsBar",
  components: {
    StatusBoard,
    TaskCard,
    Firework,
  },
  data() {
    return {
      webData: [],
      backendData: [],
      iOSData: [],
      androidData: [],
      showFirework: false,
    };
  },
  mounted() {
    this.webData = this.webCampInfo;
    this.backendData = this.backendCampInfo;
    this.iOSData = this.iOSCampInfo;
    this.androidData = this.androidCampInfo;

    dayjs.extend(isSameOrAfter);
    this.showFirework = dayjs().isSameOrAfter("2021-10-16", "day");
  },
  computed: {
    webCampInfo() {
      return this.$store.getters.webCampInfo;
    },
    backendCampInfo() {
      return this.$store.getters.backendCampInfo;
    },
    iOSCampInfo() {
      return this.$store.getters.iOSCampInfo;
    },
    androidCampInfo() {
      return this.$store.getters.androidCampInfo;
    },
  },
  methods: {
    sortData(type) {
      switch (type) {
        case "web":
          this.webData = this.webCampInfo.sort(() => Math.random() - 0.5);
          break;
        case "backend":
          this.backendData = this.backendCampInfo.sort(
            () => Math.random() - 0.5
          );
          break;
        case "ios":
          this.iOSData = this.iOSCampInfo.sort(() => Math.random() - 0.5);
          break;
        case "android":
          this.androidData = this.androidCampInfo.sort(
            () => Math.random() - 0.5
          );
          break;
      }
    },
    isPosted(time) {
      const now = dayjs();
      dayjs.extend(isToday);
      const donePost = dayjs(time).isToday(now, "day");
      return donePost;
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-content > .active {
  min-height: 100vh;
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  @include media(md) {
    padding: 45px;
    flex-direction: row;
    gap: 16px;
  }
}

::v-deep .nav-link {
  color: #7dd69c;
  &:hover {
    color: #1da16f;
  }
}

::v-deep .nav-pills .nav-link.active {
  background-color: #7dd69c;
  &:hover {
    color: #fff;
  }
}

.flip-list-move {
  transition: transform 1s;
}

.animation_control {
  padding: 0 45px 45px;
  .firework_button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color: #7dd69c;
    box-shadow: 1px 1px 3px 0 rgba($color: #808080, $alpha: 0.3);
    color: #fff;
  }
}
</style>
