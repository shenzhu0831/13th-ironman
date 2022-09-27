<template>
  <div class="TaskCard">
    <div class="avatar">
      <img :src="memberInfo.originalAuthorImageUrl" alt="avatar" />
    </div>
    <div class="member_info">
      <div class="member_post">
        <p class="member_name">{{ memberInfo.authorName }}</p>
        <a
          class="member_theme"
          :href="memberInfo.ironmanPageUrl"
          target="_blank"
        >
          {{ memberInfo.seriesTitle }}
        </a>
        <a
          class="member_title"
          :href="memberInfo.latestPostUrl"
          target="_blank"
        >
          {{ memberInfo.latestPostTitle }}
        </a>
      </div>
      <div class="post_info">
        <span class="post_time"
          >最後發文時間： {{ formateTime(memberInfo.latestPostedAt) }}</span
        >
        <span class="post_release">
          累積貼文數：{{ memberInfo.postLength }} 篇
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  name: "TaskCard",
  props: {
    memberInfo: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    formateTime(postTime) {
      return dayjs(postTime).format("YYYY/MM/DD HH:mm:ss");
    },
  },
};
</script>
<style lang="scss" scoped>
.TaskCard {
  min-height: 180px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0 rgba($color: #808080, $alpha: 0.3);
  background-color: #fff;
  @include media(md) {
    display: flex;
    gap: 16px;
  }
}

.avatar {
  width: 68px;
  height: 68px;
  margin: 0 auto 8px;
  background-color: #eee;
  border-radius: 100%;
  @include media(md) {
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
}

.member {
  &_info {
    flex: 2 0 0;
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
    }
  }
  &_name {
    font-size: 20px;
    font-weight: 600;
  }
  &_theme {
    display: block;
    font-weight: 600;
    color: #63677f;
    word-break: break-all;
  }
  &_title {
    color: #7dd69c;
    word-break: break-all;
    &:hover {
      color: #1da16f;
    }
  }
}

.post {
  &_info {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    @include media(xl) {
      flex-direction: row;
    }
  }
  &_time {
    margin-right: 1rem;
    color: #63677f;
  }
  &_release {
    color: #63677f;
  }
}
</style>
