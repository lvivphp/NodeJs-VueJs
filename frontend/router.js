import Vue from 'vue'
import Router from './vue-router'
import Index from './components/Index.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'
import View from './components/View.vue'
import Delete from './components/Delete.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
	{
      path: '/view/:id',
      name: 'View',
      component: View
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
	{
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
	{
      path: '/delete/:id',
      name: 'Delete',
      component: Delete
    }
  ]
})