<!-- eslint-disable no-debugger -->
<template>
  <div class="bar">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="index">
      <ul class="indexes">
        <li v-for="(item, index) in Array.from({ length: 16 })" :key="index">
          <span>
            {{ index + 1 }}
          </span>
        </li>
      </ul>
      <ul class="instruments">
        <li
          v-for="(instrument, index) in instruments"
          :key="index"
          class="instrument"
        >
          <span class="pre" v-if="first">{{ instrument }}</span>
          <ul class="buttons">
            <li
              v-for="(item, col) in part[instrument]"
              :key="`${instrument}${col}`"
            >
              <Button
                :checked="Boolean(part[instrument][col])"
                :selected-step="first ? step === col : step === col + 16"
                @click="toggleNote({ instrument, col, first })"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { INSTRUMENTS } from "../../store/data.js";
import { Button } from "@/components";
import { mapActions } from "vuex";

export default {
  name: "Bar",
  components: {
    Button,
  },
  props: {
    part: Object,
    first: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    instruments() {
      return INSTRUMENTS;
    },
    title() {
      return this.first ? "1st Part (Steps 1-16)" : "2nd Part (Steps 17-32)";
    },
  },
  methods: {
    ...mapActions(["toggleNote"]),
  },
};
</script>

<style scoped lang="scss">
li {
  display: inline-block;
}
.title {
  text-align: left;
  margin: 0.6rem 0;
  font-weight: 800;
}
.buttons {
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(16, 1fr);
  margin-bottom: var(--gap);

  .button {
    height: 0;
    padding-bottom: 180%;
    box-shadow: inset 0 0px 5px #00000022;
  }
}

ul {
  display: flex;
  padding: 0;
}
.instruments {
  flex-direction: column;
  font-size: 0;
}
.instrument {
  position: relative;

  .pre {
    position: absolute;
    left: -3.2rem;
    font-size: 1rem;
    font-weight: 800;
    top: 50%;
    transform: translateY(-50%);
  }
}

.indexes {
  margin-bottom: 0.6rem;
  gap: var(--gap);
  background: var(--black);
  li {
    width: 100%;
    height: 0;
    background: var(--black);
    color: var(--white);
    font-size: 0.6rem;
    text-align: center;
    padding-bottom: 5%;
    position: relative;
  }
  span {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -46%);
    left: 50%;
  }
}
</style>
