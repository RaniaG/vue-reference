<template>
  <div>
    <p>type:animation or transition, tells vue when to end the transition based on the timing of type</p>
    <button class="btn btn-primary" @click="show=!show">Toggle</button>
    <transition :name="myAlertName" appear>
      <div class="alert alert-success" v-show="show">This is a fade alert</div>
    </transition>
    <transition name="mySlide">
      <div class="alert alert-warning" v-if="!show">This is slide alert</div>
    </transition>

    <transition name="mix" type="animation">
      <div class="alert alert-danger" v-if="!show">This is slide and fade alert</div>
    </transition>

    <transition enter-active-class="animate__animated animate__bounce animate__slow 2s" appear>
      <div class="alert alert-info">this is using animate.css</div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true,
      myAlertName: "myAlert"
    };
  }
};
</script>

<style  scoped>
.myAlert-enter {
  opacity: 0;
}
.myAlert-enter-active {
  transition: opacity 2s;
}
.myAlert-leave-active {
  transition: opacity 2s;
  opacity: 0;
}

.mySlide-enter-active {
  animation: slide-in 2s forwards;
}
.mySlide-leave-active {
  animation: slide-out 2s forwards;
}

.mix-enter {
  opacity: 0;
}
.mix-enter-active {
  transition: opacity 4s;
  animation: slide-in 2s forwards;
}
.mix-leave-active {
  transition: opacity 4s;
  animation: slide-out 2s forwards;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
</style>