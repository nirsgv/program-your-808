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
    track: null,
    timer: null,
    step: 0,
    patternLength: 40,
    loading: false,
  },
  getters: {
    main_bkg_color: (state) => state.track?.color || "#ffffff",
    track: (state) => state.track,
    flat_pattern: (state) => flatParts(state.track.parts),
    step: (state) => state.step % 32,
    currentlyPlaying: (state) => !!state.timer,
    isLoading: (state) => state.loading,
    tempo: (state) => state.track?.tempo,
  },
  mutations: {
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
      state.timer = setInterval(() => (state.step += 1), 15000 / state.track.tempo);
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
    SET_LOADING: (state, { loading }) => {
      state.loading = loading;
    },
    TOGGLE_NOTE: (state, { instrument, col, first }) => {
      const partsCopy = window.structuredClone(state.track.parts);
      partsCopy[first ? 0 : 1].part[instrument][col] = partsCopy[first ? 0 : 1]
        .part[instrument][col]
        ? 0
        : 1;
      state.track.parts = partsCopy;
    },
    CHANGE_TEMPO: (state, { bpm }) => {
      state.track.tempo = bpm;
    },
  },
  actions: {
    next: ({ commit }, { currentlyPlaying }) => {
      currentlyPlaying && commit("STOP_TIMER");
      commit("RESTART_PLAYBACK");
      commit("NEXT");
      currentlyPlaying && commit("START_TIMER");
    },
    prev: ({ commit }, { currentlyPlaying }) => {
      currentlyPlaying && commit("STOP_TIMER");
      commit("RESTART_PLAYBACK");
      commit("PREV");
      currentlyPlaying && commit("START_TIMER");
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
    loadTrack: async ({ commit }, { id, currentlyPlaying }) => {
      commit("SET_LOADING", { loading: true });
      currentlyPlaying && commit("STOP_TIMER");
      const track = await getTrack({ id });
      commit("SET_TRACK", { track });
      currentlyPlaying && commit("START_TIMER");
      commit("SET_LOADING", { loading: false });
    },
    toggleNote: async ({ commit }, { instrument, col, first }) => {
      commit("TOGGLE_NOTE", { instrument, col, first });
    },
    changeTempo: async ({ commit }, { bpm, currentlyPlaying }) => {
      if (currentlyPlaying) {
        commit("STOP_TIMER");
        commit("CHANGE_TEMPO", { bpm });
        commit("START_TIMER");
      } else {
        commit("CHANGE_TEMPO", { bpm });
      }
    },
  },
  modules: {},
});
