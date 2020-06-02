<template>
  <div>
    <!-- Named slots -->
    <base-layout>
      <template v-slot:header>Header content</template>

      Default slot content
      <template v-slot:footer>Footer content</template>
    </base-layout>

    <!-- Named slot that receives props -->
    <infinite-scroll>
      <template v-slot:item="slotProps">
        <div class="item">{{ slotProps.item.text }}</div>
      </template>
    </infinite-scroll>

    <!-- Default slot that receive props, with destructuring -->
    <mouse-position v-slot="{ x, y }">Mouse position: {{ x }}, {{ y }}</mouse-position>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>