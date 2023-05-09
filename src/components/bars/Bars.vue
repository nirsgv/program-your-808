<template>
  <div class="bars separator-start main-bottom">
    <Bar :first="true" :part="parts[0].part" :step="step" />
    <Bar :part="parts[1].part" :step="step" />
    <h3>
      {{ flat_pattern }}
    </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters(["step", "flat_pattern"]),
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
