import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Concept from '@/components/Concept'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/step-1-create-a-character-concept',
      name: 'Concept',
      component: Concept
    }
  ]
})
