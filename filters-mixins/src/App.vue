<template>
  <div id="app">
    <app-main></app-main>
  </div>
</template>

<script>
import main from "./components/main.vue";
import Vue from "vue";
//global filter
Vue.filter("trim-string", function(value) {
  let val = value.replace(/\s+/g, "");
  return val;
});
//global mixin
Vue.mixin({
  created() {
    console.log("global mixin invoked for all components");
  }
});
export default {
  name: "App",
  components: {
    appMain: main
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
