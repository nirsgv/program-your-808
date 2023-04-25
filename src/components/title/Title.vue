<template>
  <div class="details">
    <ul class="big">
      <Button msg="Welcome to Your Vue.js App" :checked="true" />
      <Button msg="Welcome to Your Vue.js App" :checked="false" />
    </ul>
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
  </div>
</template>

<script>
import { Button } from "@/components";
import { TRACK_INFO } from "@/store/data.js";
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
  margin: 0.6rem 0;
  font-weight: 800;
  display: flex;
}
header,
aside {
  display: inline-block;
}
.information {
  width: 50%;
}
</style>
