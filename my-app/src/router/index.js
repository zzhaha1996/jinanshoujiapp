import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from '../components/One'
import Two from '../components/Two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Two',
      component:Two
    },
    {
      path: '/1',
      name: 'One',
      component:One
    },
    {
      path: '/2',
      name: 'HellowWorld',
      component:HelloWorld
    }
  ]
})
