<!--<template>
  <div>
    <h1>Lista de tareas</h1>
    <form @submit.prevent="addTodo">
      <input v-model="todo" placeholder="Escribe una tarea pendiente" />
      <button type="submit">Añadir</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Hecho</button>
      </li>
    </ul>
    <el-card class="box-card" v-if="todos.length">
      <div v-for="(todo, index) in todos" :key="index" class="text item">
        {{ todo }}
        <button @click="removeTodo(index)">Hecho</button>
      </div>
    </el-card>
  </div>
</template>-->

<template>
  <div>
    <h1>lista de tareas</h1>
    <form @submit.prevent="addTodo()">
      <input v-model="todo">
    </form>
    <ul>
      <li v-for="( todo, index ) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Hecho</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      todo: '',
      todos: []
    }
  },
  methods: {
    addTodo(){
      this.todos.push(this.todo);
      this.todo = '';
    },
    removeTodo(index){
      this.todos.splice(index, 1);
    }
  }
}
</script>
<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todo: '',
      todos: [],
    }
  },
  methods: {
    addTodo() {
      if (this.todo) {
        this.todos.push(this.todo);
        this.todo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>