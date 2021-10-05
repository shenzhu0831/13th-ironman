<template>
  <div class="TabsBar">
    <div class="tabs_bar">
      <b-tabs content-class="mt-3" align="center" pills>
        <b-tab @click="sortWebData" title="Web">
          <UnfinishedBoard :title="'Unfinished'" :ironmanData="webData" />
          <FinishBoard :title="'Finish'" :ironmanData="webData" />
        </b-tab>
        <b-tab @click="sortBackendData" title="Backend">
          <UnfinishedBoard :title="'Unfinished'" :ironmanData="backendData" />
          <FinishBoard :title="'Finish'" :ironmanData="backendData"
        /></b-tab>
        <b-tab @click="sortIOSData" title="iOS">
          <UnfinishedBoard :title="'Unfinished'" :ironmanData="iOSData" />
          <FinishBoard :title="'Finish'" :ironmanData="iOSData"
        /></b-tab>
        <b-tab @click="sortAndroidData" title="Android">
          <UnfinishedBoard :title="'Unfinished'" :ironmanData="androidData" />
          <FinishBoard :title="'Finish'" :ironmanData="androidData" />
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

import FinishBoard from "@/components/FinishBoard.vue";
import UnfinishedBoard from "@/components/UnfinishedBoard.vue";
import Firework from "@/components/Firework.vue";

export default {
  name: "TabsBar",
  components: {
    FinishBoard,
    UnfinishedBoard,
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
    this.showFirework = dayjs().isSame("2021-10-17", "day");
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
    sortWebData() {
      this.webData = this.webCampInfo.sort(() => Math.random() - 0.5);
    },
    sortBackendData() {
      this.backendData = this.backendCampInfo.sort(() => Math.random() - 0.5);
    },
    sortIOSData() {
      this.iOSData = this.iOSCampInfo.sort(() => Math.random() - 0.5);
    },
    sortAndroidData() {
      this.androidData = this.androidCampInfo.sort(() => Math.random() - 0.5);
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
