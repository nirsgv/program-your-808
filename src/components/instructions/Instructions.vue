<template>
  <footer class="instructions separator-start main-bottom">
    <div class="credit">
      <h1 class="number">39</h1>
      <div class="details">
        <h3 class="title">Program Your 808 Series</h3>
        <h5>By Rob Ricketts</h5>
        <h5>www.robricketts.co.uk</h5>
      </div>
    </div>
    <div class="usage">
      <div></div>
      <h3 class="title">Instructions</h3>
      <div class="map">
        <h5>
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
export default {
  name: "Instructions",
  components: {
    Button,
  }
};
</script>

<style scoped lang="scss">
.instructions {
  display: flex;
  position: relative;
  width: 100%;
  height: 16rem;
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
