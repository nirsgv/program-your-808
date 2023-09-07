<template>
  <div
    type="checkbox"
    class="button"
    :class="{ checked, 'selected-step': selectedStep }"
    @click="$emit('click')"
    @mousedown.prevent="(e) => $emit('mousedown', e, checked)"
    @mouseup="(e) => $emit('mouseup', e)"
    @mouseover="(e) => $emit('mouseover', e, checked)"
    @touchstart.prevent="(e) => $emit('touchstart', e)"
    @touchend="(e) => $emit('touchend', e)"
    @touchmove="(e) => $emit('touchmove', e)"
  >
    <div class="top">
      <span class="light"></span>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    checked: Boolean,
    selectedStep: Boolean,
  },
};
</script>

<style scoped lang="scss">
.button {
  width: 100%;
  height: 0;
  padding-bottom: 89%;
  display: inline-block;
  background: var(--white);
  cursor: pointer;
  &.checked {
    background: var(--black);
  }
  &.selected-step {
    background: var(--selected-step);
  }
  &.checked.selected-step {
    background: #555;
  }
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  border-bottom: 1px solid var(--black);
  position: relative;
  padding-bottom: 50%;
}

.light {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: var(--black);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .big & {
    height: 1rem;
    width: 1rem;
  }
  .checked & {
    background: var(--white);
  }
}
</style>
