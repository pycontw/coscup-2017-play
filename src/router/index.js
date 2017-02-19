import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login.vue'
import AddPuzzle from '../views/AddPuzzle.vue'
import PuzzleList from '../views/PuzzleList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/register/:token', component: Login },
    {
      path: '/AddPuzzle',
      component: AddPuzzle,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token')) {
          next()
        } else {
          next('/')
        }
      }
    },
    { path: '/PuzzleList/:token', component: PuzzleList }
  ]
})
