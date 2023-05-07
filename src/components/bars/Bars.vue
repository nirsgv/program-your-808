<template>
  <div class="bars separator-start main-bottom">
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
}
</style>
