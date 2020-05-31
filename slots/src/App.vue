<template>
  <div id="app">
    <app-parent></app-parent>
  </div>
</template>

<script>
import parent from "./components/parent.vue";

export default {
  name: "App",
  components: {
    appParent: parent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
