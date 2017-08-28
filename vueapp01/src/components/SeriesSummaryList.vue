<template>
  <div class="series-summary-list">
    <series-summary v-for="serie in series" v-bind:serie="serie"></series-summary>
  </div>
</template>

<script>
import {HTTP, MARVEL_API_PARAMS} from '@/js/http-common'
// import {MARVEL_API_PARAMS} from '@/js/http-common'
import SeriesSummary from '@/components/SeriesSummary'

export default {
  name: 'series-summary-list',
  data () {
    return {
      series: [],
      errors: []
    }
  },
  beforeCreate: function () {
    // console.log('beforeCreated beg ' + this.series)
    // console.log(this.series)
    this.series = [
      {title: 'Title5', thumbnail: 'thumb5'},
      {title: 'Title2', thumbnail: 'thumb2'},
      {title: 'Title3', thumbnail: 'thumb3'},
      {title: 'Title4', thumbnail: 'thumb4'}
    ]
    // console.log('beforeCreated end ' + this.series)
    // console.log(this.series)
  },
  created: function () {
    // console.log('created beg ' + this.series)
    // console.log(this.series)
    HTTP.get(`https://gateway.marvel.com:443/v1/public/series?titleStartsWith=Astonishing X-Men`, MARVEL_API_PARAMS)
    .then(response => {
      console.log(response.data)
      this.series = response.data
    })
    .catch(e => {
      console.log(e)
      this.errors.push(e)
    })
    /*
    this.series = [
      {title: 'Title1', thumbnail: 'thumb1'},
      {title: 'Title2', thumbnail: 'thumb2'},
      {title: 'Title3', thumbnail: 'thumb3'}
    ]
    // console.log('created end ' + this.series)
    // console.log(this.series)
    /*
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(response => {
        this.sources = response.data.sources;
      });
    */
  },
  components: { SeriesSummary }
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
