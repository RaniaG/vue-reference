<template>
  <div>
    <button @click="selectedComponent='appSuccess'" class="btn btn-success">Success</button>
    <button @click="selectedComponent='appWarn'" class="btn btn-warning">Warning</button>
    <button @click="selectedComponent='appError'" class="btn btn-danger">Danger</button>
    <keep-alive>
      <component
        :is="selectedComponent"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit exercitationem laboriosam quo nostrum ducimus cupiditate iusto earum dolorem eos. Aspernatur, molestias deserunt atque culpa excepturi doloremque corporis hic expedita facilis!</component>
    </keep-alive>
    {{selectedComponent}}
  </div>
</template>

<script>
import error from "./error";
import success from "./success";
import warning from "./warning";

export default {
  data: function() {
    return {
      selectedComponent: "appWarn"
    };
  },
  components: {
    appError: error,
    appSuccess: success,
    appWarn: warning
  }
};
</script>

<style lang="scss" scoped>
</style>