<template>
  <div class="player separator-start main-bottom">
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
  </div>
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

  props: {
    checked: Boolean,
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
    }, 10),

    changeSpeed(e) {
      console.log(e);
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
  display: flex;
  position: relative;
  width: 100%;
  height: 16rem;
  gap: 2.6rem;
}
.tempo,
.pattern-write {
  flex-basis: 50%;
  padding-top: 0.8rem;
  margin: 0 auto;
}
.title {
  text-align: left;
}
</style>
