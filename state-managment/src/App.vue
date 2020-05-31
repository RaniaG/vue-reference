<template>
  <div id="app">
    <app-counter></app-counter>
    <app-modify-counter></app-modify-counter>
    <app-counter-input></app-counter-input>
  </div>
</template>

<script>
import counter from "./components/counter-view.vue";
import modifyCounter from "./components/modify.vue";
import counterInput from "./components/counter-input";

export default {
  name: "App",
  components: {
    appCounter: counter,
    appModifyCounter: modifyCounter,
    appCounterInput: counterInput
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
