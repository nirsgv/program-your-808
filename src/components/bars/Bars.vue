<template>
  <div class="bars">
    <Bar :first="true" :part="parts[0].part" />
    <Bar :part="parts[1].part" />
  </div>
</template>

<script>
import { INSTRUMENTS } from "../../store/data.js";
import Bar from "../bar/Bar.vue";
export default {
  name: "Bars",
  components: {
    Bar,
  },
  props: {
    parts: Array,
  },
  computed: {
    instruments() {
      return INSTRUMENTS;
    },
  },
};
</script>

<style scoped lang="scss">
.bars {
  display: grid;
  gap: 2.6rem;
  grid-template-columns: 1fr 1fr;
  position: relative;
  padding-top: 1.1rem;
    &:before {
    content: "";
    width: 100%;
    height: 0.4rem;
    position: absolute;
    top: 0;
    background-color: var(--black);
  }
}
</style>
