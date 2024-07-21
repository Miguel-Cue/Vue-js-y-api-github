import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Importar componente TodoList.
import TodoList from '../views/TodoList.vue'
// Importar componente IssueList
import IssueList from '../views/IssueList.vue'
// Importar componente TodosIssues
import TodosIssues from '../views/TodosIssues.vue';
//Element.IU
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/issue-list',
    name: 'IssueList', // Asegúrate de que el nombre aquí coincide con el nombre en la importación
    component: IssueList
  },
  {
      path: '/todos-issues',
      name: 'TodosIssues',
      component: TodosIssues
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
