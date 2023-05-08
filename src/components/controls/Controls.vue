<template>
  <nav class="controls main-bottom">
    <button @click="prev">
      <Icon iconName="prev" />
    </button>
    <button @click="timer ? stopTimer() : startTimer()">
      <Icon :iconName="timer ? 'pause' : 'play'" />
    </button>
    <button @click="next">
      <Icon iconName="next" />
    </button>
    {{ step }}
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
    ...mapGetters(["timer", "step"]),
  },
  methods: {
    ...mapActions(["next", "prev", "startTimer", "stopTimer"]),
  },
};
</script>

<style scoped lang="scss">
.controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;

  &:after {
    content: "";
    display: block;
    background: var(--black);
    height: 4px;
    width: 100%;
    margin-bottom: 1.8rem;
    position: absolute;
    bottom: -3rem;
  }

  button {
    text-decoration: none;
    color: var(--black);
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    &:not(:first-of-type):not(:last-of-type) {
      margin: 0 1rem;
    }
  }
}
</style>
