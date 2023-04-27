import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import { data } from "@/store/data.js";
Vue.use(Vuex);
console.log(router)
export default new Vuex.Store({
  state: {
    patterns: data,
    main_bkg_color: "#f00",
    selected_id: 1,
  },
  getters: {
    main_bkg_color: (state) => state.main_bkg_color,
    pattern: (state) => state.patterns.find((p) => p.id == state.selected_id),
    patterns: (state) => state.patterns,
  },
  mutations: {
    CHANGE_BKG_COLOR: (state, { color }) => {
      state.main_bkg_color = color;
    },
    SET_SELECTED_ID: (state, { id }) => {
      if (id < state.patterns.length) {
        state.selected_id = id;
      }
    },
  },
  actions: {
    changeBkgColor: ({ commit }, { color }) => {
      commit("CHANGE_BKG_COLOR", { color });
    },
    setSelectedId: ({ commit }, { id }) => {
      commit("SET_SELECTED_ID", { id });
    },
    next: ({ commit }, { id }) => {
      commit("SET_SELECTED_ID", { id: id + 1 });
    },
    prev: ({ commit }, { id }) => {
      commit("SET_SELECTED_ID", { id: id - 1 });
    },
  },
  modules: {},
});
