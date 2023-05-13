<template>
  <div class="pat" v-if="track">
    <Title :item="track" />
    <Bars :parts="track.parts"  />
    <Player />
    <Instructions />
  </div>
</template>

<script>
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
  mounted() {
    this.loadTrack({ id: this.id });
  },
  computed: {
    ...mapGetters(["track"]),
  },
  methods: {
    ...mapActions(["loadTrack"]),
  },
  watch: {
    id: function () {
      this.loadTrack({ id: this.id });
    },
  },
};
</script>

<style scoped lang="scss">
.pat {
  padding: 4rem 0 0.6rem;
}
</style>
