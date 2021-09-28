<template>
  <div class="TabsBar">
    <div class="tabs_bar">
      <b-tabs content-class="mt-3" align="center" pills>
        <b-tab title="Web" active>
          <UnfinishedBoard :title="'Unfinished'" :status="false" />
          <FinishBoard :title="'Finish'" :status="true" />
        </b-tab>
        <b-tab title="Backend">
          <UnfinishedBoard :title="'Unfinished'" :status="false" />
          <FinishBoard :title="'Finish'" :status="true" />
        </b-tab>
        <b-tab title="Android">
          <UnfinishedBoard :title="'Unfinished'" :status="false" />
          <FinishBoard :title="'Finish'" :status="true" />
        </b-tab>
        <b-tab title="iOS">
          <UnfinishedBoard :title="'Unfinished'" :status="false" />
          <FinishBoard :title="'Finish'" :status="true" />
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
    return {};
  },
};
</script>
<style lang="scss" scoped>
.tab-content > .active {
  padding: 45px;
  display: flex;
  gap: 16px;
  background-color: #f2f2f2;
}

::v-deep .nav-link {
  color: #7dd69c;
  &:hover {
    color: #7dd69c;
  }
}

::v-deep .nav-pills .nav-link.active {
  background-color: #7dd69c;
}
</style>
