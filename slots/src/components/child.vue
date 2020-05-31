<template>
  <div>
    <h1>
      Child:
      <slot name="title"></slot>
    </h1>
    <p>
      <slot>default description</slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 span {
  font-style: italic;
}
</style>