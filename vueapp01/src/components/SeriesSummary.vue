<template>
  <div class="series-summary">
    {{serie.title}} {{serie.thumbnail}}
  </div>
</template>

<script>
export default {
  name: 'series-summary',
  data () {
    return {
      what: ''
    }
  },
  props: ['serie']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
    list-style-position: inside;
}
a {
  color: #42b983;
}
</style>
