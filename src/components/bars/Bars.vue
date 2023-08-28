<template>
  <div class="bars separator-start main-bottom" :class="{ 'single-bar': $isMobile() }">
    <Bar :first="true" :part="parts[0].part" :step="step" v-if="!$isMobile() || currentBar === 'a'"/>
    <Bar :part="parts[1].part" :step="step" v-if="!$isMobile() || currentBar === 'b'"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    currentBar() {
      return this.step <= 15 ? 'a' : 'b';
    }
  },
  methods: {
    ...mapActions(["playSound"]),
  },
  watch: {
    step(newVal, oldVal) {
      if (newVal !== oldVal && this.flat_pattern && this.flat_pattern[this.step]) {
        this.flat_pattern[this.step].forEach((instrument) => this.playSound({ instrument: instrument.toLowerCase() }));
      }
    },
  },
};
</script>

<style scoped lang="scss">
.bars {
  display: grid;
  gap: 2.6rem;
  position: relative;
  grid-template-columns: 1fr 1fr;
  &.single-bar {
    grid-template-columns: 1fr;
  };
}
</style>
