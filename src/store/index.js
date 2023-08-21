/* eslint-disable no-debugger */
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import { getTrack } from "@/services/service.js";
import sounds from "@/howler-config.js";

Vue.use(Vuex);

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
    selected_id: 1,
    track: null,
    timer: null,
    step: 0,
    bpm: 120,
    patternLength: 40,
  },
  getters: {
    main_bkg_color: (state) => state.track?.color || "#ffffff",
    track: (state) => state.track,
    flat_pattern: (state) => flatParts(state.track.parts),
    step: (state) => state.step % 32,
    timer: (state) => state.timer,
  },
  mutations: {
    SET_SELECTED_ID: (state, { id }) => {
      if (id < state.patternLength) {
        state.selected_id = id;
      }
    },
    NEXT: (state) => {
      if (state.track.id < 40) {
        router.push({ path: `/${state.track.id + 1}` });
      }
    },
    PREV: (state) => {
      if (state.track.id > 1) {
        router.push({ path: `/${state.track.id - 1}` });
      }
    },
    START_TIMER: (state) => {
      state.timer = setInterval(() => (state.step += 1), 15000 / state.bpm);
    },
    STOP_TIMER: (state) => {
      clearInterval(state.timer);
      state.timer = null;
    },
    PLAY_SOUND: (state, { instrument }) => {
      sounds.play(instrument);
    },
    SET_TRACK: (state, { track }) => {
      state.track = track;
    },
    RESTART_PLAYBACK: (state) => {
      state.step = 0;
    },
  },
  actions: {
    setSelectedId: ({ commit }, { id }) => {
      commit("SET_SELECTED_ID", { id });
    },
    next: ({ commit }) => {
      commit("STOP_TIMER");
      commit("RESTART_PLAYBACK");
      commit("NEXT");
      commit("START_TIMER");
    },
    prev: ({ commit }) => {
      commit("STOP_TIMER");
      commit("RESTART_PLAYBACK");
      commit("PREV");
      commit("START_TIMER");
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
    loadTrack: async ({ commit }, { id }) => {
      const track = await getTrack({ id });
      commit("SET_TRACK", { track });
    },
  },
  modules: {},
});
