<template>
  <div>
    <!-- bind an attribute -->
    <img v-bind:src="imageSrc" />

    <!-- dynamic attribute name (2.6.0+) -->
    <button v-bind:[key]="value"></button>

    <!-- shorthand -->
    <img :src="imageSrc" />

    <!-- shorthand dynamic attribute name (2.6.0+) -->
    <button :[key]="value"></button>

    <!-- with inline string concatenation -->
    <img :src="'/path/to/images/' + fileName" />

    <!-- class binding -->
    <div :class="{ red: isRed }"></div>
    <div :class="[classA, classB]"></div>
    <div :class="[classA, { classB: isB, classC: isC }]"></div>

    <!-- style binding -->
    <div :style="{ fontSize: size + 'px' }"></div>
    <div :style="[styleObjectA, styleObjectB]"></div>

    <!-- binding an object of attributes -->
    <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

    <!-- DOM attribute binding with prop modifier -->
    <div v-bind:text-content.prop="text"></div>

    <!-- prop binding. "prop" must be declared in my-component. -->
    <my-component :prop="someThing"></my-component>

    <!-- pass down parent props in common with a child component -->
    <child-component v-bind="$props"></child-component>

    <!-- XLink -->
    <svg>
      <a :xlink:special="foo" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>