<!--<script setup lang="ts">
import router from './router';
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/todo-list">TodoList</router-link>
    </nav>
    <router-view/>
  </div>
</template>-->
<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      Se ha eliminado el enlace "/about" y se ha añadido el enlace "/todo-list".
      <router-link to="/todo-list">TodoList</router-link>
      <router-link to="/issue-list">IssueLis</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>-->

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- Se ha eliminado el enlace "/about" y se ha añadido el enlace "/todo-list". -->
      <router-link to="/todo-list">TodoList</router-link> |
      <router-link to="/issue-list">IssueLis</router-link> |
      <router-link to="/todos-issues">TodosIssues</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
