<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <span class="navbar-item" v-for="route in routes">
        <router-link :to="route" active-class="active" class="navbar-link">
          {{ route.title }}
        </router-link>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  computed: {
    routes: function () {
      var routes = []
      for (var i in this.$router.options.routes) {
        if (!this.$router.options.routes.hasOwnProperty(i)) {
          continue
        }
        var route = this.$router.options.routes[i]
        if (route.hasOwnProperty('title')) {
          routes.push(route)
        }
      }
      return routes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
