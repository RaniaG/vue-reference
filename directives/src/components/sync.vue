<template>
  <div>
    <p>Use sync modifier to make 2way binding to a prop passed down to a child component</p>
    <p>v-model is only used on input like components which must have a prop called value and event called input</p>
    <text-document v-bind:title="doc.title" v-on:update:title="doc.title = $event"></text-document>
    <text-document v-bind:title.sync="doc.title"></text-document>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>