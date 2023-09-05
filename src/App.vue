<template>
  <div id="app" class="disable-horizontal-scroll primary-color-background">
    <main class="main-position">
      <router-view />
    </main>
    <Player />
  </div>
</template>

<script>
import { Player } from "@/components/index.js";
export default {
  name: "App",
  components: {
    Player,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Open Sans, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: background-color 0s ease-in-out;
  min-height: 100%;
}
main {
  padding: var(--main-padding);
  padding-bottom: var(--player-height);
  position: relative;
}
</style>
