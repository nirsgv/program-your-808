<template>
  <section class="player separator-start" :style="{ backgroundColor: main_bkg_color }" v-if="tempo">
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
  </section>
</template>

<script>
import { SpeedKnob } from "@/components/index.js";
import { mapGetters, mapActions } from "vuex";
import throttle from 'lodash.throttle';

export default {
  name: "Player",
  components: {
    SpeedKnob,
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
    ...mapGetters(["tempo", "currentlyPlaying", "main_bkg_color"]),
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
  height: var(-player-height);
  gap: 0 2.6rem;
}
.tempo,
.pattern-write {
  flex-basis: 50%;
  padding-top: 0.8rem;
}
.title {
  text-align: left;
}
</style>
