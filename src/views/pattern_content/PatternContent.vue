<template>
  <div class="pat" v-if="pattern">
    <button @click="playSound({ instrument: 'bd' })">d</button>
    <Title :item="pattern" />
    <Bars :parts="pattern.parts"/>
    <Player />
    <Instructions />
  </div>
</template>

<script>
import { data } from "@/store/data.js";
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
    id: [Number, String],
  },
  computed: {
    ...mapGetters(["main_bkg_color", "pattern"]),

    data: function () {
      return {
        data,
      };
    },
  },
  methods: {
    ...mapActions(["changeBkgColor", "setSelectedId", "playSound"]),
    updateStoreFromRoute() {
      this.setSelectedId({ id: this.id });
      this.changeBkgColor({ color: this.pattern.color });
    },
  },
  created() {
    this.updateStoreFromRoute();
  },
  watch: {
    id: function () {
      this.updateStoreFromRoute();
    },
  },
};
</script>

<style scoped lang="scss">
.pat {
  padding: 4rem 0 0.6rem;
}
</style>
