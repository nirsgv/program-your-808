<template>
  <section class="player separator-start primary-color-background" v-if="tempo">
    <div class="controls main-position">
      <div class="tempo">
        <h3 class="title">Tempo</h3>
        <SpeedKnob
          :value="tempo"
          @change-speed="changeSpeed"
          :min="min"
          :max="max"
          :step="step"
        />
      </div>
      <div class="playback">
        <h3 class="title prevent-select">Playback</h3>
        <Controls />
      </div>
    </div>

  </section>
</template>

<script>
import SpeedKnob from "../speed-knob/SpeedKnob.vue";
import Controls from "../controls/Controls.vue";

import { mapGetters, mapActions } from "vuex";
import throttle from 'lodash.throttle';

export default {
  name: "Player",
  components: {
    SpeedKnob,
    Controls,
  },
  data: function () {
    return {
      min: 60,
      max: 180,
      step: 1,
    };
  },
  methods: {
    ...mapActions(["changeTempo"]),
    throttledChangeSpeed: throttle(function(e) {
      this.changeTempo({ bpm: Number(e.target.value), currentlyPlaying: this.currentlyPlaying });
    }, 20),

    changeSpeed(e) {
      this.throttledChangeSpeed(e);
    },
  },
  computed: {
    ...mapGetters(["tempo", "currentlyPlaying"]),
  },
};
</script>

<style scoped lang="scss">

.player {
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 10;
  display: flex;
  width: 100%;
  height: var(--player-height);
  gap: 0 2.6rem;
  box-shadow: 2px 0px 8px 6px rgba(0, 0, 0, 0.15);
}
.controls {
  display: flex;
  flex-basis: 86rem;
  gap: 2.6rem;
  position: relative;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
  @media (min-width: 600px) {
    padding: 0;
  }
}
.tempo,
.playback {
  position: relative;
  flex-basis: 50%;
  .title {
    position: absolute;
  }
}
.tempo {
  height: var(--player-height);
}
.title {
  text-align: left;
}
</style>
