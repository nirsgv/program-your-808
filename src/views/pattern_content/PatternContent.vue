<template>
  <div>
    <div class="content" :class="{ pause }" v-if="track">
      <Title :item="track" />
      <Bars :parts="track.parts" />
      <Player />
      <Instructions :trackNumber="id"/>
    </div>
    <section v-if="pause" class="loader"></section>
  </div>
</template>

<script>
import { Bars, Title, Player, Instructions } from "@/components/index.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PatternContent",
  components: {
    Bars,
    Title,
    Player,
    Instructions,
  },
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    this.loadTrack({ id: this.id, currentlyPlayin: this.currentlyPlaying });
  },
  computed: {
    ...mapGetters(["track", "isLoading", "currentlyPlaying"]),
    pause() {
      return !this.track || this.isLoading;
    },
  },
  methods: {
    ...mapActions(["loadTrack"]),
  },
  watch: {
    id: function () {
      this.loadTrack({ id: this.id, currentlyPlayin: this.currentlyPlaying });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  padding: var(--content-padding);
  transition: all 0.1s ease-out;
  position: relative;
  &.pause {
    opacity: 0.75;
  }
}
.loader {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: #ffffff44;
}
</style>
