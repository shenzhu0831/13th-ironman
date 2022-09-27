<template>
  <div class="InformationBoard">
    <h1 class="information_board_title" @click="sortData">
      好想工作室v6.0 鐵人賽戰情看板
    </h1>
    <div class="information_content">
      <StatusBoard :title="'Unfinished'">
        <div v-for="item in contestantInfo" :key="item.authorName">
          <TaskCard v-if="!isPosted(item.latestPostedAt)" :memberInfo="item" />
        </div>
      </StatusBoard>
      <StatusBoard :title="'Finished'">
        <div v-for="item in contestantInfo" :key="item.authorName">
          <TaskCard v-if="isPosted(item.latestPostedAt)" :memberInfo="item" />
        </div>
      </StatusBoard>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

import StatusBoard from "@/components/StatusBoard.vue";
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "InformationBoard",
  components: {
    StatusBoard,
    TaskCard,
  },
  data() {
    return {
      informationData: [],
      isShowFirework: false,
    };
  },
  mounted() {
    this.contestantInfo.sort(() => Math.random() - 0.5);

    dayjs.extend(isSameOrAfter);
    this.isShowFirework = dayjs().isSameOrAfter("2022-10-16", "day");
  },
  computed: {
    contestantInfo() {
      return this.$store.getters.contestantInfo;
    },
  },
  methods: {
    sortData() {
      this.contestantInfo.sort(() => Math.random() - 0.5);
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
.InformationBoard {
  padding: 1rem;
  position: relative;
  border: solid 1px #7dd69c;
  border-radius: 1rem;
}
.information {
  &_board_title {
    width: fit-content;
    padding: 0.5rem 1rem;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #7dd69c;
    border: solid 1px #7dd69c;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    @include media(md) {
      font-size: 1.5rem;
    }
  }
  &_content {
    display: flex;
    gap: 1rem;
  }
}

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
</style>
