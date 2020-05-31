<template>
  <div>
    <slot name="one"></slot>
    <h3 @click="nameClicked(name)">{{name}}</h3>
    <span>{{status||'Critical'}}</span>
    <button @click="changeStatus">Change</button>
    <slot>default text</slot>
  </div>
</template>

<script>
import { EventBus } from "./EventBus";

export default {
  // props: ["name", "status"],
  props: {
    name: {
      type: String,
      required: true
    },
    status: String,
    nameClicked: Function
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
      this.$emit("serverChange", this.status);
      EventBus.$emit("serverChange", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>