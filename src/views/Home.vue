<template>
  <div class="home">
    <div class="header">
      <h1 class="logo">
        <img src="@/assets/image/pic/main-logo-goodideas@3x.png" alt="logo" />
      </h1>
      <div class="web_info">
        <h2 class="title">
          <span>2022 IT邦幫忙鐵人賽</span>
          <div class="animation_control">
            <Firework
              v-if="isShowFirework"
              @closeFirework="isShowFirework = $event"
            />
            <button @click="isShowFirework = true" class="firework_button">
              Firework
            </button>
          </div>
        </h2>
        <div class="toolbar">
          <div class="competing_time">
            <span class="counter">{{ deadline }}</span>
          </div>
          <div class="web_theme">
            <input
              @change="toggleTheme"
              id="theme_checkbox"
              type="checkbox"
              class="theme_checkbox"
            />
            <label for="theme_checkbox" class="theme_label">
              <SunIcon class="sun_icon" v-if="userTheme === 'light_theme'" />
              <MoonIcon class="moon_icon" v-if="userTheme === 'dark_theme'" />
            </label>
          </div>
        </div>
      </div>
    </div>
    <main class="main">
      <InformationBoard />
    </main>
  </div>
</template>
<script>
import dayjs from "dayjs";
import Cookies from "js-cookie";

import SunIcon from "@/assets/image/icon/sun.svg";
import MoonIcon from "@/assets/image/icon/moon.svg";

import InformationBoard from "@/components/InformationBoard.vue";
import Firework from "@/components/Firework.vue";
export default {
  name: "Home",
  components: {
    SunIcon,
    MoonIcon,
    InformationBoard,
    Firework,
  },
  data() {
    return {
      deadline: "",
      isShowFirework: false,
      userTheme: Cookies.get("user-theme") ?? "light_theme",
    };
  },
  created() {
    this.deadline = this.getCountdownTime();
    window.requestAnimationFrame(this.getCountdownTime);
  },
  mounted() {
    const initUserTheme = this.userTheme;
    this.setTheme(initUserTheme);
  },
  methods: {
    getCountdownTime() {
      const deadline = dayjs("2022-10-16 00:00:00");
      const now = dayjs();

      let dayDiff = deadline.diff(now, "day");
      let hoursDiff = now.format("HH");
      let minDiff = now.format("mm");
      let secDiff = now.format("ss");

      this.deadline = `比賽倒數： 
              ${dayDiff} 天 
              ${24 - hoursDiff} 時
              ${60 - minDiff} 分
              ${60 - secDiff} 秒`;
      //利用 callback 不斷呼叫 window.requestAnimationFrame api
      window.requestAnimationFrame(this.getCountdownTime);
    },
    setTheme(theme) {
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = Cookies.get("user-theme");
      if (activeTheme === "light_theme") {
        this.setTheme("dark_theme");
      } else {
        this.setTheme("light_theme");
      }
      Cookies.set("user-theme", this.userTheme);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
}
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
    @include media(md) {
      margin: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .title {
    margin: 0;
    display: flex;
    font-size: 20px;
    span {
      &:first-of-type {
        flex: 2 0 0;
        color: #63677f;
      }
    }
  }
}

.toolbar {
  margin-top: 8px;
  display: flex;
  gap: 16px;
  align-items: center;
  .competing_time {
    min-width: 270px;
    margin-top: 8px;
    text-align: center;
    .counter {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #7dd69c;
    }
  }
  .theme_checkbox {
    display: none;
  }
  .theme_label {
    width: 24px;
    height: 24px;
    cursor: pointer;
    .sun_icon {
      height: 120%;
    }
    svg {
      height: 100%;
      fill: #7dd69c;
      &:hover {
        fill: #1da16f;
      }
    }
  }
}

.animation_control {
  flex: 1 0 0;
  .firework_button {
    width: 100%;
    display: block;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #7dd69c;
    box-shadow: 1px 1px 3px 0 rgba($color: #808080, $alpha: 0.3);
    color: #fff;
  }
}

.main {
  padding: 1rem;
}
</style>
<style lang="css" scoped>
::v-deep .header .title span:first-of-type {
  color: var(--color-text);
}

::v-deep .tab-content {
  background-color: var(--tab-content);
}

::v-deep .information_board_title {
  background-color: var(--color-background);
}

::v-deep .FinishBoard h3 {
  color: var(--color-text);
}

::v-deep .UnfinishedBoard h3 {
  color: var(--color-text);
}

::v-deep .TaskCard {
  background-color: var(--color-background);
}

::v-deep .member_name {
  color: var(--color-text);
}
</style>
