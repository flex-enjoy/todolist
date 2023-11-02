<script setup lang="ts">
  import TodoList from './components/TodoList.vue';
</script>

<template>
  <div class="app-wrapper">
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="wrapper">
      <TodoList />
    </div>
  </div>
</template>

<style scoped>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>

