<template>
  <div>
    <h3>Counter: {{$store.state.counter}}</h3>
    <h3>Counter*2: {{mulCtr}}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ctr: function() {
      return this.$store.state.counter;
    },
    ...mapGetters({
      mulCtr: "counterMul"
    })
  }
};
</script>

<style scoped>
</style>