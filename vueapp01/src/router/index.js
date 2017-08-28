import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SeriesSummaryList from '@/components/SeriesSummaryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      title: 'Home',
      name: 'Home',
      component: Hello
    },
    {
      path: '/hello',
      title: 'Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/series',
      title: 'Series',
      name: 'SeriesSummaryList',
      component: SeriesSummaryList
    }
  ]
})
