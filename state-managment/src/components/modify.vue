<template>
  <div>
    <button class="btn btn-success" @click="$store.state.counter++">Increment</button>
    <button class="btn btn-success" @click="incAsync(3)">Increment Async</button>
    <button class="btn btn-primary" @click="$store.commit('decrement')">Decrement</button>
    <button class="btn btn-primary" @click="$store.dispatch('decAsync')">Decrement Async</button>

    <button class="btn btn-primary" @click="reset">Reset</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(["reset"]),
    ...mapActions(["incAsync"])
  }
};
</script>

<style scoped>
</style>