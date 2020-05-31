<template>
  <div>
    <div class="btn btn-primary" @click="onChange(true)" :class="{'active':value}">On</div>
    <div class="btn btn-secondary" @click="onChange(false)" :class="{'active':!value}">Off</div>
  </div>
</template>

<script>
export default {
  props: ["value"],

  methods: {
    onChange: function(val) {
      this.$emit("input", val);
      this.preventDefault();
    }
  }
};
</script>

<style scoped>
.btn.active {
  border-color: red !important;
}
</style>