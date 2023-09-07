<!-- eslint-disable no-debugger -->
<template>
  <div class="bar" @mouseleave="stopDragging" @touchend="touchStop">
    <h3 class="title prevent-select">
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
          <span class="pre prevent-select" v-if="first">{{ instrument }}</span>
          <ul class="buttons">
            <li
              v-for="(item, col) in part[instrument]"
              :key="`${instrument}${col}`"
            >
              <Button
                :checked="Boolean(part[instrument][col])"
                :selected-step="first ? step === col : step === col + 16"
                @click="toggleNote({ instrument, col, first })"
                @mousedown="startDragging"
                @mouseup="stopDragging"
                @mouseover="handleDrag"
                @touchstart="touchStart"
                @touchend="touchStop"
                @touchmove="handleMove"
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

const getTouched = (e) => {
  const touch = e.touches[0];
  return document.elementFromPoint(touch.clientX, touch.clientY);
};

export default {
  name: "Bar",
  components: {
    Button,
  },
  data() {
    return {
      isDragging: false,
      adding: false,
      startItem: null,
    };
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
    startDragging(e, checked) {
      this.isDragging = true;
      this.adding = !checked;
      this.startItem = e.target;
      e.target.click();
    },
    stopDragging(e) {
      if (this.startItem === e.target) e.target.click();
      this.isDragging = false;
    },
    handleDrag(e, checked) {
      if (e.buttons === 0) {
        return (this.isDragging = false);
      }
      if (this.isDragging) {
        if (this.adding) {
          if (!checked) {
            e.target.click();
          }
        } else if (checked) {
          e.target.click();
        }
      }
    },
    touchStart(e) {
      const element = getTouched(e);
      if (!element) return;
      element.click();
      this.isDragging = true;
      this.adding = !element.classList.contains("checked");
      this.startItem = e.target;
    },
    touchStop() {
      this.isDragging = false;
      this.startItem = null;
    },
    handleMove(e) {
      const element = getTouched(e);
      if (!element) return;
      const checked = element.classList.contains("checked");
      if (element === this.startItem) return;
      this.startItem = element;
      if (this.adding) {
        if (!checked) {
          element.click();
        }
      } else if (checked) {
        element.click();
      }
    },
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
    left: var(--pre-position);
    font-size: 1rem;
    font-weight: 800;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
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
