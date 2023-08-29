<template>
  <div id="app" :style="{ backgroundColor: main_bkg_color }" class="disable-horizontal-scroll">
    <main>
      <router-view />
    </main>
    <Player />
    <Controls />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Controls, Player } from "@/components/index.js";
export default {
  name: "App",
  components: {
    Controls,
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
  max-width: 86rem;
  margin: 0 auto;
  padding: var(--main-padding);
  padding-bottom: var(--footer-height);
  position: relative;
}
</style>
