<template>
  <div>edit page for card id:{{id}}, and name: {{$route.query.name}}</div>
</template>

<script>
export default {
  props: ["id"], //only works for params not query
  beforeRouteEnter(to, from, next) {
    //we cant access vue instance here of the component
    next();
    //next((vm)=>{
    // vm.id //we can access vue instance here
    //})
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>

<style scoped>
</style>