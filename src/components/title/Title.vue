<template>
  <header class="details main-bottom">
    <nav>
      <ul class="tracks-nav">
        <Button :checked="true" @click="next" />
        <Button :checked="false" @click="prev" />
      </ul>
    </nav>
    <header class="title">
      <h2>{{ item.artist }}</h2>
      <h2>{{ item.track }}</h2>
    </header>
    <aside class="information">
      <header>Track Information</header>
      <h4 v-for="field in trackInfo" :key="field">
        <dl>
          <dt>
            <span class="definition">{{ field }}</span>
          </dt>
          <dd>
            <span> {{ item[field.toLowerCase()] }}</span>
          </dd>
        </dl>
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
  },
  computed: {
    trackInfo() {
      return TRACK_INFO;
    },
  },
};
</script>

<style scoped lang="scss">
.tracks-nav {
  padding: 0;
  width: var(--tracks-nav-width);
  display: flex;
  gap: 0 var(--tracks-nav-gap);
}

h4 {
  font-size: 1.2rem;
  font-weight: 400;
  span:first-of-type {
    display: inline-block;
  }
}
.details {
  text-align: left;
  font-weight: 800;
  display: flex;
  gap: var(--details-gap);
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
header {
  flex-grow: 1;
}
.information {
}
dl {
  /* display: flex; */
}
dt {
  display: none;
  width: 10rem;
  @media (min-width: 600px) {
    display: inline-block;
  }
}
</style>
