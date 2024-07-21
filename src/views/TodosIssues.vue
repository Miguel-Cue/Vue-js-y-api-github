<template>
  <div>
    <h1>Lista de Tareas y Problemas</h1>
    <!-- Cuadro de entrada adicional para otra lista de tareas -->
    <form @submit.prevent="addAnotherTodo">
      <el-input placeholder="Agregar otra tarea" v-model="anotherTodo" @keyup.enter.native="addAnotherTodo"></el-input>
    </form>
    <el-row :gutter="12">
      <!-- Área de visualización de tareas pendientes -->
      <el-col :span="12" v-for="(todo, index) in todos" :key="index">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <el-row :gutter="12">
            <el-col :span="21">{{ todo }}</el-col>
            <el-col :span="3">
              <el-button @click="removeTodo(index)" type="danger" icon="el-icon-delete" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" v-for="issue in issues" :key="issue.id">
        <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
          <el-row :gutter="12">
            <el-col :span="21">{{ issue.title }}</el-col>
            <el-col :span="3">
              <el-button @click="removeIssue(issue)" type="danger" icon="el-icon-delete" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/repos/diveintocode-corp/vue_seriese_api',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
  },
});

export default {
  name: 'TodosIssues',
  data() {
    return {
      todo: '',
      anotherTodo: '',
      todos: [],
      issues: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = '';
    },
    addAnotherTodo() {
      if (this.anotherTodo.trim() !== '') { 
        this.todos.push(this.anotherTodo);
        this.anotherTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    removeIssue(issue) {
      this.issues = this.issues.filter(i => i.id !== issue.id);
    },
    getIssues() {
      client.get('/issues')
        .then((res) => {
          this.issues = res.data;
        });
    }
  },
  created() {
    this.getIssues();
  }
}
</script>
