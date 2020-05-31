<template>
  <div>
    <p>{{$store.state.user.name}}, {{$store.getters['user/nameCapital']}}</p>
    <input type="number" v-model="counter" />
  </div>
</template>

<script>
export default {
  computed: {
    counter: {
      get() {
        return this.$store.state.counter;
      },
      set(value) {
        this.$store.commit("setCounter", +value);
      }
    }
  }
};
</script>

<style scoped>
</style>