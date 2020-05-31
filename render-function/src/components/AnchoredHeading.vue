<script>
export default {
  props: ["level"],
  render: function(createElement) {
    console.log(this.level);
    return createElement("h" + this.level, this.$slots.default);
  },
};
</script>

<style scoped></style>
