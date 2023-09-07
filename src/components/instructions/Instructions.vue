<template>
  <footer class="instructions separator-start main-bottom">
    <div class="credit">
      <h1 class="number">{{ trackNumber }}</h1>
      <div class="details">
        <h3 class="title">Program Your 808 Series</h3>
        <h5>
          Created by
          <a
            class="primary-color-link"
            target="_blank"
            href="https://github.com/nirsgv/program-your-808"
            >Nir Segev</a
          >
        </h5>
        <h5>
          Poster design By
          <a
            class="primary-color-link"
            target="_blank"
            href="https://robricketts.bigcartel.com/"
            >Rob Ricketts</a
          >
        </h5>
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
import { Button } from "@/components/index.js";

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
};
</script>

<style scoped lang="scss">
.instructions {
  display: grid;
  position: relative;
  width: 100%;
  height: var(--footer-height);
  gap: 2.6rem;
  grid-template-columns: 20rem 1fr;
  @media (min-width: 600px) {
    display: flex;
  }

}
.credit,
.usage {
  flex-basis: 50%;
  padding: 1rem 1.4rem;
  text-align: left;
}
.credit {
  background-color: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    padding: 1rem 3rem;
    flex-direction: row;
  }

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
  text-align: left;
  flex-basis: 2rem;
  @media (min-width: 600px) {
    flex-basis: 10rem;
  }
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
  gap: 2rem;
  @media (min-width: 600px) {
    gap: 0;
  }
  .button {
    cursor: auto;
  }
}
.text {
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
}
.button {
  padding-bottom: 160%;
  @media (min-width: 600px) {
    padding-bottom: 60%;
  }
}
.key {
  flex-direction: column;
  width: 3rem;
  display: flex;
  gap: 0.4rem;
  @media (min-width: 600px) {
    flex-direction: row;
    width: 8rem;
    gap: 0;
  }
  h5 {
    @media (min-width: 600px) {
      margin-left: 1rem;
    }
    white-space: nowrap;
  }
}
</style>
