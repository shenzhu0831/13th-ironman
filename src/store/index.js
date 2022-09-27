import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contestantInfo: [],
  },
  getters: {
    contestantInfo(state) {
      return state.contestantInfo;
    },
    webCampInfo(state) {
      return state.contestantInfo.filter((info) => info.camp === "Web");
    },
    backendCampInfo(state) {
      return state.contestantInfo.filter((info) => info.camp === "Backend");
    },
    iOSCampInfo(state) {
      return state.contestantInfo.filter((info) => info.camp === "iOS");
    },
    androidCampInfo(state) {
      return state.contestantInfo.filter((info) => info.camp === "Android");
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
        .get("http://54.250.146.224:3000/team/249/members")
        .then((res) => commit("contestantInfo", res.data.data));
    },
  },
  modules: {},
});
