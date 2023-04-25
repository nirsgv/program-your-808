import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patterns: [],
    main_bkg_color: "#f00",
  },
  getters: {
    main_bkg_color: (state) => state.main_bkg_color,
  },
  mutations: {
    INIT: (state) => {
      state.patterns = state.patterns.push();
    },
    CHANGE_BKG_COLOR: (state, { color }) => {
      state.main_bkg_color = color;
    },
  },
  actions: {
    changeBkgColor: ({ commit }, { color }) => {
      commit("CHANGE_BKG_COLOR", { color });
    },
  },
  modules: {},
});
