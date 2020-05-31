<template>
  <div>
    <ul class="nav nav-pills">
      <router-link class="nav-item" to="/" exact active-class="active" tag="li">
        <a class="nav-link">Home</a>
      </router-link>
      <li class="nav-item">
        <router-link to="/cards" active-class="active" class="nav-link">Cards</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>