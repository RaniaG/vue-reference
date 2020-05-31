<template>
  <div>
    <app-good :level="1">Hello World Good</app-good>
    <app-bad :level="1">Hello World Bad</app-bad>
  </div>
</template>

<script>
import good from "./AnchoredHeading";
import bad from "./AnchoredHeadingBad";
export default {
  components: {
    appGood: good,
    appBad: bad,
  },
};
</script>

<style scoped></style>
