<template>
  <div>
    <h2>{{msg}}</h2>
    <app-servers></app-servers>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
</style>
