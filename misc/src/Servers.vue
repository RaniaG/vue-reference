<template>
  <div>
    <app-server
      v-for="server in servers"
      :key="server.name"
      :name="server.name"
      :status="server.status"
      @serverChange="serverStatusChange"
      :nameClicked="serverNameClicked"
    ></app-server>
    <app-server name="hamada" status="hamada">
      <h1 slot="one">slot 1</h1>
      <h2>slot 2</h2>
    </app-server>
  </div>
</template>

<script>
import server from "./Server.vue";
import { EventBus } from "./EventBus";
export default {
  data: function() {
    return {
      servers: [
        { name: "server-1", status: "critical" },
        { name: "server-2", status: "severe" },
        { name: "server-3", status: "low" }
      ]
    };
  },
  methods: {
    serverStatusChange: function(value) {
      console.log(value);
    },
    serverNameClicked: function(serverName) {
      alert(serverName);
    }
  },
  created() {
    EventBus.$on("serverChange", name => {
      alert(name);
    });
  },
  components: {
    "app-server": server
  }
};
</script>

<style lang="scss" scoped>
</style>