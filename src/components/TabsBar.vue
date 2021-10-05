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
      </b-tabs>
    </div>
  </div>
</template>
<script>
import FinishBoard from "@/components/FinishBoard.vue";
import UnfinishedBoard from "@/components/UnfinishedBoard.vue";

export default {
  name: "TabsBar",
  components: {
    FinishBoard,
    UnfinishedBoard,
  },
  data() {
    return {
      webData: [],
      backendData: [],
      iOSData: [],
      androidData: [],
    };
  },
  mounted() {
    this.webData = this.webCampInfo;
    this.backendData = this.backendCampInfo;
    this.iOSData = this.iOSCampInfo;
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
  background-color: #f2f2f2;
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
</style>
