<template>
  <div class="TabsBar">
    <div class="tabs_bar">
      <b-tabs content-class="mt-3" align="center" pills>
        <b-tab title="Web" active>
          <UnfinishedBoard
            :title="'Unfinished'"
            :status="false"
            :ironmanData="ironmanData"
          />
          <FinishBoard
            :title="'Finish'"
            :status="true"
            :ironmanData="ironmanData"
          />
        </b-tab>
        <b-tab title="Backend"> </b-tab>
        <b-tab title="Android"> </b-tab>
        <b-tab title="iOS"> </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import ironmanData from "@/data/ironmanData.json";
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
      ironmanData,
    };
  },
};
</script>
<style lang="scss" scoped>
.tab-content > .active {
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
    color: #7dd69c;
  }
}

::v-deep .nav-pills .nav-link.active {
  background-color: #7dd69c;
}
</style>
