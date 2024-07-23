<template>
  <div>
    <h1>Lista de Tareas y Problemas</h1>
    <!-- Formulario de entrada de tareas -->
    <form @submit.prevent="addTodo">
      <el-input placeholder="Agregar tarea" v-model="todo"></el-input>
    </form>
    <el-row :gutter="20">
      <!-- Área de visualización de tareas y problemas -->
      <el-col :span="12" v-for="(item, index) in intercalatedList" :key="index">
        <todo-item
          :item="item"
          :type="item.type"
          @remove-item="handleRemoveItem(index, item.type)"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
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
  components: {
    TodoItem
  },
  data () {
    return {
      todo: '',
      todos: [],
      issues: []
    }
  },
  computed: {
    intercalatedList() {
      const maxLength = Math.max(this.todos.length, this.issues.length);
      const intercalated = [];
      for (let i = 0; i < maxLength; i++) {
        if (this.todos[i]) {
          intercalated.push({ title: this.todos[i], type: 'todo' });
        }
        if (this.issues[i]) {
          intercalated.push({ title: this.issues[i].title, type: 'issue', id: this.issues[i].id, number: this.issues[i].number });
        }
      }
      return intercalated;
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    closeIssue(index) {
      const target = this.issues[index];
      client.patch(`/issues/${target.number}`, {
        state: "closed"
      }).then(() => {
        this.issues.splice(index, 1);
      });
    },
    handleRemoveItem(index, type) {
      if (type === 'todo') {
        this.removeTodo(index);
      } else if (type === 'issue') {
        this.closeIssue(index);
      }
    },
    getIssues() {
      client.get('issues').then((res) => {
        this.issues = res.data;
      });
    }
  },
  created() {
    this.getIssues();
  }
}
</script>
