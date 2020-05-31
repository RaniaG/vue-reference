<template>
  <div></div>
</template>

<script>
export default {
  bind: function(el, binding) {
    let delay = 0;
    if (binding.modifiers["delay"]) delay = 3000;
    setTimeout(() => {
      if (binding.arg == "color") {
        el.style.color = binding.value;
        el.style.backgroundColor = "black";
      } else {
        el.style.backgroundColor = binding.value ?? "green";
      }
    }, delay);
  }
};
</script>

<style lang="scss" scoped>
</style>