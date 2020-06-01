<template>
  <div>
    <button class="btn btn-primary" @click="show=!show">Toggle</button>
    <pre>
      mode:
      -out-in: hide element first then show the second
      -in-out: show first then hide
    </pre>
    <transition
      leave-active-class="animate__animated animate__fadeOutDown animate__slow 2s"
      enter-active-class="animate__animated animate__fadeIn animate__slow 2s"
      mode="out-in"
    >
      <div class="alert alert-success" v-if="show" key="success">this is alert one</div>
      <div class="alert alert-warning" v-else key="warn">this is alert two</div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
</style>