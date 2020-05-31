<template>
  <div>
    <app-child v-for="child in children" :key="child.title">
      <span slot="title">{{child.title}}</span>
      <span v-if="child.description">{{child.description}}</span>
    </app-child>
  </div>
</template>

<script>
import child from "./child.vue";

export default {
  data: function() {
    return {
      children: [
        { title: "child1", description: "asdsdfsdfsdfsdfsdfsdf" },
        { title: "child2" }
      ]
    };
  },
  components: {
    appChild: child
  }
};
</script>

<style lang="scss" scoped>
</style>