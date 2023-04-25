<template>
  <div id="app" :style="{ backgroundColor: main_bkg_color }">
    <main>
      <Title :item="data[0]" />
      <Bars :parts="data[0].parts" />
    </main>
  </div>
</template>

<script>
import { Bars, Title } from "./components/index.js";
import { data } from "./store/data.js";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Bars,
    Title,
  },
  computed: {
    ...mapGetters(["main_bkg_color"]),

    data: function () {
      return data;
    },
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
  transition: background-color 1s ease-out;
  height: 100%;
}
main {
  max-width: 1020px;
  margin: 0 auto;
}
</style>
