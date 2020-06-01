<template>
  <div>
    <h1>Single Element</h1>
    <app-single-element></app-single-element>
    <h1>Multiple Elements</h1>
    <app-multi-element></app-multi-element>
  </div>
</template>

<script>
import singleElement from "./singleElementTransitions";
import multiElement from "./multiElementTransitions";
export default {
  components: {
    appSingleElement: singleElement,
    appMultiElement: multiElement
  }
};
</script>

<style scoped>
</style>