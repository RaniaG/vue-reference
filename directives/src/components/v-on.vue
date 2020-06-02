<template>
  <div>
    <p>Event modifiers</p>
    <!-- the click event's propagation will be stopped -->
    <a v-on:click.stop="doThis"></a>

    <!-- the submit event will no longer reload the page -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- modifiers can be chained -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- just the modifier -->
    <form v-on:submit.prevent></form>

    <!-- use capture mode when adding the event listener -->
    <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
    <div v-on:click.capture="doThis">...</div>

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div v-on:click.self="doThat">...</div>
    <!-- the click event will be triggered at most once -->
    <a v-on:click.once="doThis"></a>
    <!-- the scroll event's default behavior (scrolling) will happen -->
    <!-- immediately, instead of waiting for `onScroll` to complete  -->
    <!-- in case it contains `event.preventDefault()`                -->
    <div v-on:scroll.passive="onScroll">...</div>

    <!-- only call `vm.submit()` when the `key` is `Enter` -->
    <input v-on:keyup.enter="submit" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>