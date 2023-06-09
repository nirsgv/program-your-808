import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import { data } from "@/store/data.js";
import { Howl, Howler } from "howler";
Vue.use(Vuex);
Howler.volume(0.5);
console.log({ router });
console.log({ Howler });
console.log({ Howl });

const flatPart = (part, flat = {}) => {
  for (let inst in part) {
    if (!Array.isArray(part[inst])) continue;
    for (let i = 0; i < 16; i++) {
      if (part[inst][i]) {
        flat[i] = Array.isArray(flat[i]) ? [...flat[i], inst] : [inst];
      }
    }
  }
  return flat;
};

const incrementPart = (part, incremented = {}) => {
  for (let step in part) {
    incremented[Number(step) + 16] = part[step];
  }
  return incremented;
};

const flatParts = (parts) => ({
  ...flatPart(parts[0].part),
  ...incrementPart(flatPart(parts[1].part)),
});

export default new Vuex.Store({
  state: {
    patterns: data,
    main_bkg_color: "#f00",
    selected_id: 1,
    timer: null,
    step: 0,
    bpm: 120,
    sound: {
      bd: new Howl({
        src: [require("../assets/bd.wav")],
      }),
      sd: new Howl({
        src: [require("../assets/sd.wav")],
      }),
      lc: new Howl({
        src: [require("../assets/lc.wav")],
      }),
      mc: new Howl({
        src: [require("../assets/mc.wav")],
      }),
      hc: new Howl({
        src: [require("../assets/hc.wav")],
      }),
      rs: new Howl({
        src: [require("../assets/rs.wav")],
      }),
      cp: new Howl({
        src: [require("../assets/cp.wav")],
      }),
      cb: new Howl({
        src: [require("../assets/cb.wav")],
      }),
      cy: new Howl({
        src: [require("../assets/cy.wav")],
      }),
      oh: new Howl({
        src: [require("../assets/oh.wav")],
      }),
      ch: new Howl({
        src: [require("../assets/ch.wav")],
      }),
    }
  },
  getters: {
    main_bkg_color: (state) => state.main_bkg_color,
    patterns: (state) => state.patterns,
    pattern: (state) => state.patterns.find((p) => p.id == state.selected_id),
    flat_pattern: (state) =>
      flatParts(state.patterns.find((p) => p.id == state.selected_id).parts),
    step: (state) => state.step % 32,
    timer: (state) => state.timer,
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
    NEXT: (state) => {
      if (state.selected_id < state.patterns.length) {
        router.push({ path: `/${state.selected_id + 1}` });
      }
    },
    PREV: (state) => {
      if (state.selected_id > 1) {
        router.push({ path: `/${state.selected_id - 1}` });
      }
    },
    START_TIMER: (state) => {
      state.timer = setInterval(() => (state.step += 1), 15000 / state.bpm);
    },
    STOP_TIMER: (state) => {
      clearInterval(state.timer);
      // state.step = 0;
      state.timer = null;
    },
    PLAY_SOUND: (state, { instrument }) => {
      state.sound[instrument].play();
    },
  },
  actions: {
    changeBkgColor: ({ commit }, { color }) => {
      commit("CHANGE_BKG_COLOR", { color });
    },
    setSelectedId: ({ commit }, { id }) => {
      commit("SET_SELECTED_ID", { id });
    },
    next: ({ commit }) => {
      commit("NEXT");
    },
    prev: ({ commit }) => {
      commit("PREV");
    },
    startTimer: ({ commit }) => {
      commit("START_TIMER");
    },
    stopTimer: ({ commit }) => {
      commit("STOP_TIMER");
    },
    playSound: ({ commit }, { instrument }) => {
      commit("PLAY_SOUND", { instrument });
    },
  },
  modules: {},
});
