<template>
  <div id="app" :style="{ backgroundColor: main_bkg_color }" class="disable-horizontal-scroll">
    <main class="main-position">
      <router-view />
    </main>
    <Player />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Player } from "@/components/index.js";
export default {
  name: "App",
  components: {
    Player,
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
  min-height: 100%;
}
main {
  padding: var(--main-padding);
  padding-bottom: var(--player-height);
  position: relative;
}
</style>
