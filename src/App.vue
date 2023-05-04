<template>
  <div id="app" :style="{ backgroundColor: main_bkg_color }">
    <main>
      <router-view />
      <div class="player">
        <SpeedKnob
          :value="speed"
          @change-speed="changeSpeed"
          :min="min"
          :max="max"
          :step="step"
        />
      </div>
    </main>
    1
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SpeedKnob } from "./components";
export default {
  name: "App",
  components: {
    SpeedKnob,
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
  computed: {
    ...mapGetters(["main_bkg_color"]),
  },
};
</script>

<style lang="scss">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "helvetica";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--bkg1);
  transition: background-color 0s ease-in-out;
  height: 100%;
}
main {
  max-width: 92rem;
  margin: 0 auto;
}
.player {
  position: fixed;
  width: 40rem;
  height: 100vh;
  bottom: 0;
  background: red;
  padding: 3rem;
}
</style>
