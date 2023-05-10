<template>
  <div class="bars separator-start main-bottom">
    <Bar :first="true" :part="parts[0].part" :step="step" />
    <Bar :part="parts[1].part" :step="step" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
    ...mapGetters(["step"]),
    instruments() {
      return INSTRUMENTS;
    },
  },
  methods: {
    ...mapActions(["playSound"]),
  },
  watch: {
    step(newVal, oldVal) {
      if (newVal !== oldVal) {
        const instruments = this.flat_pattern[newVal].map(i => i.toLowerCase());
        instruments.forEach(instrument => this.playSound({ instrument }));
      }
    },
  }
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
