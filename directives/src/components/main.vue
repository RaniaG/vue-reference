<template>
  <div>
    <p v-highlight.delay>this should be green</p>

    <p v-highlight="'grey'">this should be grey</p>

    <p v-highlight:color="'red'">this text should be red</p>
    <div v-local-italic="{delay:3000}">local</div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-italic": {
      bind(el, binding) {
        let delay = 0;
        console.log(binding.value);
        if (binding.value.delay) delay = binding.value.delay;
        setTimeout(() => {
          el.style.fontStyle = "italic";
        }, delay);
      }
    }
  }
};
</script>

<style scoped>
p {
  color: white;
}
</style>