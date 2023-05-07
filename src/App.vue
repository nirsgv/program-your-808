<template>
  <div id="app" :style="{ backgroundColor: main_bkg_color }">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
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
}
</style>
