<template>
  <nav class="controls main-bottom">
    <button @click="prev">
      <!-- <h5>Previous</h5> -->
      <Icon iconName="prev" />
    </button>
    <button href="">
      <!-- <h5>Play</h5> -->
      <Icon iconName="play" />
    </button>
    <button @click="next">
      <!-- <h5>Next</h5> -->
      <Icon iconName="next" />
    </button>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import Icon from "@/components/icon/Icon.vue";
export default {
  name: "Controls",
  components: {
    Icon,
  },
  methods: {
    ...mapActions(["next", "prev"]),
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
