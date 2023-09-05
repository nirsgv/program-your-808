<template>
  <nav class="playback-buttons">
    <button @click="prev({ currentlyPlaying })">
      <Icon iconName="prev" />
    </button>
    <button @click="togglePlay">
      <Icon :iconName="playLabel" />
    </button>
    <button @click="next({ currentlyPlaying })">
      <Icon iconName="next" />
    </button>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Icon from "@/components/icon/Icon.vue";
export default {
  name: "Controls",
  components: {
    Icon,
  },
  computed: {
    ...mapGetters(["currentlyPlaying", "step"]),
    playLabel() {
      return this.currentlyPlaying ? "pause" : "play";
    },
  },
  methods: {
    ...mapActions(["next", "prev", "startTimer", "stopTimer", "getStuff"]),
    togglePlay() {
      return this.currentlyPlaying ? this.stopTimer() : this.startTimer();
    },
  },
};
</script>

<style scoped lang="scss">
.playback-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  button {
    text-decoration: none;
    color: var(--black);
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 2rem;
    &:hover {
      color: #444;
    }
  }
}
</style>
