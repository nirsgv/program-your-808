<template>
  <footer class="instructions separator-start main-bottom">
    <div class="credit">
      <h1 class="number">{{ trackNumber }}</h1>
      <div class="details">
        <h3 class="title">Program Your 808 Series</h3>
        <h5>Created by <a target="_blank" href="https://github.com/nirsgv/program-your-808" :style="{ color: main_bkg_color }">Nir Segev</a></h5>
        <h5>Poster design By <a target="_blank" href="https://robricketts.bigcartel.com/" :style="{ color: main_bkg_color }">Rob Ricketts</a></h5>
      </div>
    </div>
    <div class="usage">
      <div></div>
      <h3 class="title">Instructions</h3>
      <div class="map">
        <h5 class="text">
          Use the diagram above to program the steps into your Roland TR-808
          drum machine, then sit back while memories of your favourite beats
          from the past are brought back to life.
        </h5>
        <div class="keys">
          <div class="key">
            <Button :checked="true" />
            <h5>Key On</h5>
          </div>
          <div class="key">
            <Button />
            <h5>Key Off</h5>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Button } from '@/components/index.js';
import { mapGetters } from "vuex";

export default {
  name: "Instructions",
  components: {
    Button,
  },
  props: {
    trackNumber: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapGetters(["main_bkg_color"]),
  }
};
</script>

<style scoped lang="scss">
.instructions {
  display: flex;
  position: relative;
  width: 100%;
  height: var(--footer-height);
  gap: 2.6rem;
}
.credit,
.usage {
  flex-basis: 50%;
  padding: 1rem 3rem;
  text-align: left;
}
.credit {
  background-color: var(--black);
  color: var(--white);
  display: flex;
}
.details {
  text-align: left;
  .title {
    &:after {
      content: "";
      display: block;
      background: var(--white);
      height: 1px;
      width: auto;
      margin: 1rem 0 1.8rem;
    }
  }
}
.usage {
  padding: 1rem 0;
  .title {
    margin-bottom: 1rem;
  }
}
a {
  text-decoration: none;
}
h5 {
  font-size: 1.1rem;
  font-weight: 400;
}
.separator-start {
  padding-top: 0;
}
.number {
  flex-basis: 10rem;
  text-align: left;
}
.map {
  display: flex;
  h5 {
    flex-basis: 50%;
    padding-right: 1rem;
  }
  & > h5 {
    padding-right: 4rem;
  }
}
.keys {
  flex-basis: 50%;
  display: flex;
}
.text {
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
}
.button {
  padding-bottom: 60%;
}
.key {
  margin-right: 2.6rem;
  display: flex;
  flex-basis: 8rem;
  h5 {
    margin-left: 1rem;
    white-space: nowrap;
  }
}
</style>
