import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contestantInfo: [],
    webCampInfo: [],
    backendCampInfo: [],
    iOSCampInfo: [],
    androidCampInfo: [],
  },
  getters: {
    contestantInfo(state) {
      return state.contestantInfo;
    },
    webCampInfo(state) {
      state.webCampInfo = state.contestantInfo.filter(
        (info) => info.camp === "Web"
      );
      return state.webCampInfo;
    },
    backendCampInfo(state) {
      state.backendCampInfo = state.contestantInfo.filter(
        (info) => info.camp === "Backend"
      );
      return state.backendCampInfo;
    },
    iOSCampInfo(state) {
      state.iOSCampInfo = state.contestantInfo.filter(
        (info) => info.camp === "iOS"
      );
      return state.iOSCampInfo;
    },
    androidCampInfo(state) {
      state.androidCampInfo = state.contestantInfo.filter(
        (info) => info.camp === "Android"
      );
      return state.androidCampInfo;
    },
  },
  mutations: {
    contestantInfo(state, info) {
      state.contestantInfo = info;
    },
  },
  actions: {
    async getContestantInfo({ commit }) {
      await axios
        .get("https://ithelp-hao-siang-v5-cheerio.herokuapp.com/lastPost")
        .then((res) => commit("contestantInfo", res.data));
    },
  },
  modules: {},
});
