<template>
  <div class="TabsBar">
    <div class="tabs_bar">
      <b-tabs content-class="mt-3" align="center" pills>
        <b-tab title="Web" active>
          <UnfinishedBoard :title="'Unfinished'" :ironmanData="webCampInfo" />
          <FinishBoard :title="'Finish'" :ironmanData="webCampInfo" />
        </b-tab>
        <b-tab title="Backend">
          <UnfinishedBoard
            :title="'Unfinished'"
            :ironmanData="backendCampInfo" />
          <FinishBoard :title="'Finish'" :ironmanData="backendCampInfo"
        /></b-tab>
        <b-tab title="iOS">
          <UnfinishedBoard :title="'Unfinished'" :ironmanData="iOSCampInfo" />
          <FinishBoard :title="'Finish'" :ironmanData="iOSCampInfo"
        /></b-tab>
        <b-tab title="Android">
          <UnfinishedBoard
            :title="'Unfinished'"
            :ironmanData="androidCampInfo"
          />
          <FinishBoard :title="'Finish'" :ironmanData="androidCampInfo" />
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
      webCampInfo: [],
      backendCampInfo: [],
      iOSCampInfo: [],
      androidCampInfo: [],
    };
  },
  created() {
    this.webCampInfo = this.contestantInfo.filter(
      (info) => info.camp === "Web"
    );
    this.backendCampInfo = this.contestantInfo.filter(
      (info) => info.camp === "Backend"
    );
    this.iOSCampInfo = this.contestantInfo.filter(
      (info) => info.camp === "iOS"
    );
    this.androidCampInfo = this.contestantInfo.filter(
      (info) => info.camp === "Android"
    );
  },
  computed: {
    contestantInfo() {
      return this.$store.getters.contestantInfo;
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
