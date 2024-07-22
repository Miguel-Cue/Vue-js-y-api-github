<template>
  <div>
    <h1>lista de tareas</h1>
    <!-- formulario de entrada de tareas -->
    <form @submit.prevent="addTodo()">
      <el-input placeholder="todo" v-model="todo"></el-input>
    </form>
    <el-row :gutter="12">
      <!-- área de visualización de tareas pendientes -->
      <el-col :span="12" v-for="( todo, index ) in todos" :key="index">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <el-row :gutter="12">
            <el-col :span="21">{{ todo }}</el-col>
            <el-col :span="3">
              <el-button @click="removeTodo(index)" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <!-- zona de visualización de problemas -->
      <el-col :span="12" v-for="( issue, index ) in issues" :key="issue.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <el-row :gutter="12">
            <el-col :span="21">{{ issue.title }}</el-col>
            <el-col :span="3">
              <el-button @click="closeIssue(index)" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//import TodoItem from '@/components/TodoItem.vue';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/repos/Miguel-Cue/Vue-App-Token',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`  // token de acceso personal
  },
});

export default {
  name: 'TodosIssues',
  data () {
    return {
      todo: '',
      todos: [],
      issues: []
    }
  },
  methods: {
    // Gestionar tareas desde aquí
    addTodo(){
      this.todos.push(this.todo);
      this.todo= '';
    },
    removeTodo(index){
      this.todos.splice(index, 1);
    },
    // Gestionar los problemas desde aquí
    closeIssue(index){
      const target = this.issues[index];
      client.patch(`/issues/${target.number}`,
          {
            state: "closed"
          },
        )
        .then(() => {
         this.issues.splice(index, 1);
      })
    },
    getIssues() {
      client.get('issues')
        .then((res) => {
          this.issues = res.data
      })
    }
  },
  created() {
    this.getIssues();
  }
}
</script>
