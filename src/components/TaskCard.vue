<template>
  <div class="TaskCard">
    <div class="avatar">
      <img src="" alt="" />
    </div>
    <div class="member_info">
      <p class="member_name">名字</p>
      <p class="member_theme">主題</p>
      <a class="member_title" href="##">文章標題</a>
      <div class="post_info">
        <span class="post_time">最後發文日期：2020/09/28</span>
        <span class="post_release">累積貼文數：13 篇</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TaskCard",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.TaskCard {
  height: 150px;
  padding: 16px;
  display: flex;
  gap: 16px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0 rgba($color: #808080, $alpha: 0.3);
  background-color: #fff;
}

.avatar {
  width: 68px;
  height: 68px;
  border-radius: 100%;
  background-color: #eee;
}

.member {
  p {
    color: #63677f;
  }
  &_info {
    p {
      margin: 0;
    }
  }
  &_name {
    font-weight: 600;
  }
  &_title {
    color: #7dd69c;
  }
}

.post {
  &_time {
    margin-right: 1rem;
  }
}
</style>
