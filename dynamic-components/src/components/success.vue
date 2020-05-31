<template>
  <div class="alert alert-success">
    <slot></slot>
  </div>
</template>

<script>
export default {
  activated: function() {
    alert("success active");
  },
  deactivated: function() {
    alert("success deactivated");
  }
};
</script>

<style lang="scss" scoped>
</style>