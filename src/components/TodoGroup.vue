<script setup lang="ts">
  import { TodoStatus } from '../enum';
  import useTodos from '../store/useTodos';
  import Draggable from 'vuedraggable';
  import CreateTodo from './CreateTodo.vue';

  interface Props {
    status: TodoStatus;
  }

  const props = defineProps<Props>();

  const { getTodosByStatus, deleteTodo, updateTodo } = useTodos();
  const todoList = getTodosByStatus(props.status);

  const groupLabel = {
    [TodoStatus.Pending]: 'Pending',
    [TodoStatus.InProgress]: 'In Progress',
    [TodoStatus.Completed]: 'Completed',
  };

  const onDraggableChange = (payload: any) => {
    console.log('payload', payload);
    if (payload?.added?.element) {
      updateTodo(payload?.added?.element, props.status);
    }
  };
</script>

<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>

    <Draggable
      class="draggable"
      :list="todoList"
      group="todos"
      itemKey="id"
      @change="onDraggableChange"
    >
      <template #item="{ element: todo }">
        <li>
          {{ todo.title }}
          {{ todo.status }}
          <span class="delete-icon" @click="deleteTodo(todo)">x</span>
          <div>
            <span class="todo-description">{{ todo.description }}</span>
          </div>
        </li>
      </template>
    </Draggable>

    <CreateTodo :status="props.status" />
  </div>
</template>

<style scoped>
  .group-wrapper {
    flex: 1;
    padding: 20px;
    background-color: rgb(67, 56, 80);
    width: 300px;
  }

  .group-wrapper li {
    list-style-type: none;
    background-color: aliceblue;
    color: rgb(67, 56, 80);
    padding: 2px 5px;
    cursor: grab;
    margin-bottom: 10px;
  }

  .draggable {
    min-height: 200px;
  }
  .todo-description {
    font-size: 12px;
  }
  .delete-icon {
    float: right;
    cursor: pointer;
  }
</style>

