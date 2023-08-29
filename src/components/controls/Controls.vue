<template>
  <nav class="playback-buttons">
    <button @click="prev({ currentlyPlaying })">
      <Icon iconName="prev" />
    </button>
    <button @click="currentlyPlaying ? stopTimer() : startTimer()">
      <Icon :iconName="currentlyPlaying ? 'pause' : 'play'" />
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
  },
  methods: {
    ...mapActions(["next", "prev", "startTimer", "stopTimer", "getStuff"]),
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
