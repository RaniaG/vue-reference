<template>
  <div>
    <h2>Filter</h2>
    <p>{{title | toUppercase | trim-string}}</p>
    <p>Filters are invoked every time there is any change in the dom even if its not related to the filtered text</p>
    <h2>Computed propery</h2>
    <input type="text" v-model="filteredText" />
    <ul>
      <li v-for="fruit in filteredArr" :key="fruit">{{fruit}}</li>
    </ul>
    <p>Computed properties only invoked when the properties inside them change</p>
    <h2>Mixins</h2>
    <input type="text" v-model="query" />
    <ul>
      <li v-for="cntry in searchResults" :key="cntry">{{cntry}}</li>
    </ul>
    <p>
      Mixins are shared code between components,
      a new instance is created separately for each component,
      and merged with it.
      Mixins are like inheritance but without template
    </p>
  </div>
</template>

<script>
import listMixin from "../mixins/listing";
export default {
  data: function() {
    return {
      title: "hello there",
      fruits: ["apple", "orange", "banana"],
      filteredText: ""
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredArr() {
      return this.fruits.filter(e => e.match(this.filteredText));
    }
  },
  mixins: [listMixin],
  created() {
    console.log("main component created");
    this.list = ["usa", "egypt", "canada", "uk", "malaysia"];
    this.filteredList = this.list;
  }
};
</script>

<style lang="scss" scoped>
</style>