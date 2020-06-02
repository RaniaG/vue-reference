<template>
  <div>
    <!-- can be used to iterate properties in object -->
    <div v-for="(value, name, index) in object" :key="name">{{ index }}. {{ name }}: {{ value }}</div>
    <div>
      <span v-for="n in 10" :key="n">{{ n }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>