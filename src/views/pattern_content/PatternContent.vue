<template>
  <div class="pat" v-if="pattern">
    <Title :item="pattern" />
    <Bars :parts="pattern.parts" />
  </div>
</template>

<script>
import { data } from "@/store/data.js";
import { Bars, Title } from "@/components/index.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PatternContent",
  components: {
    Bars,
    Title,
  },
  props: {
    id: [Number, String],
  },
  computed: {
    ...mapGetters(["main_bkg_color", "pattern"]),

    data: function () {
      return data;
    },
  },
  methods: {
    ...mapActions(["changeBkgColor", "setSelectedId"]),
  },
  created() {
    this.setSelectedId({ id: this.id });
  },
  watch: {
    id: function () {
      this.setSelectedId({ id: this.id });
      this.changeBkgColor({color: this.pattern.color})
    },
  }
};
</script>

<style scoped lang="scss"></style>
