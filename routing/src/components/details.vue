<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4"></div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card {{id}}</h5>
            <p
              class="card-text"
            >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <router-link to="/cards/11" class="card-link">Next</router-link>
            <router-link
              :to="{name:'editCard',params:{id}, query:{name:'card 1'}}"
              class="card-link"
            >Edit</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route: function(to) {
      this.id = to.params.id;
    }
  }
};
</script>

<style scoped>
</style>