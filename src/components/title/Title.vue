<template>
  <header class="details">
    <nav>
      <ul class="big">
        <Button :checked="true" @click="routerNext" />
        <Button :checked="false" @click="routerPrev" />
      </ul>
    </nav>
    <header class="title">
      <h2>{{ item.artist }}</h2>
      <h2>{{ item.track }}</h2>
    </header>
    <aside class="information">
      <header>Track Information</header>
      <h4 v-for="field in trackInfo" :key="field">
        <span>{{ field }}</span>
        <span> {{ item[field.toLowerCase()] }}</span>
      </h4>
    </aside>
  </header>
</template>

<script>
import { Button } from "@/components";
import { TRACK_INFO } from "@/store/data.js";
import { mapActions } from "vuex";

export default {
  name: "Title",
  components: {
    Button,
  },
  props: {
    checked: Boolean,
    part: Number,
    item: Object,
  },
  methods: {
    ...mapActions(["next", "prev"]),
    routerNext() {
      this.$router.push({ path: `/${this.item.id + 1}` });
    },
    routerPrev() {
      if (this.item.id > 1) {
        this.$router.push({ path: `/${this.item.id - 1}` });
      }
    },
  },
  computed: {
    trackInfo() {
      return TRACK_INFO;
    },
  },
};
</script>

<style scoped lang="scss">
.big {
  padding: 0;
  width: 150px;
  display: flex;
  gap: 0 var(--big-gap);
}

h4 {
  display: flex;
  font-size: 1.2rem;
  span:first-of-type {
    width: 26%;
    display: inline-block;
  }
}
.details {
  text-align: left;
  margin: 0.6rem 0 3rem 0;
  font-weight: 800;
  display: flex;
  gap: 0 2rem;
  & > * {
    &:before {
      content: "";
      display: block;
      background: var(--black);
      height: 1px;
      width: auto;
      margin-bottom: 1rem;
    }
  }
}
header,
aside {
  display: inline-block;
}
.information {
  width: 50%;
}
</style>
