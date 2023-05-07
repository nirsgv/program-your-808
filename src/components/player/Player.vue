<template>
  <div class="player separator-start main-bottom">
    <div class="tempo">
      <h3 class="title">Tempo</h3>
      <SpeedKnob
        :value="speed"
        @change-speed="changeSpeed"
        :min="min"
        :max="max"
        :step="step"
      />
    </div>
    <div class="pattern-write">
      <h3 class="title">Pattern Write</h3>

      <SpeedKnob
        :value="speed"
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
      speed: 120,
      min: 60,
      max: 180,
      step: 8,
    };
  },
  methods: {
    changeSpeed(e) {
      console.log(Number(e.target.value));
      this.speed = Number(e.target.value);
    },
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
