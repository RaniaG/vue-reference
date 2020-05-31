<template>
  <div class="alert alert-danger">
    <slot></slot>
    <div>
      <button @click="counter++">increment</button>
      {{counter}}
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  }
};
</script>

<style lang="scss" scoped>
</style>