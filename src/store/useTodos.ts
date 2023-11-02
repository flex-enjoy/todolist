import { computed, reactive } from 'vue';
import { TodoStatus } from '../enum';

interface TodoStore {
  [TodoStatus.Pending]: Todo[];
  [TodoStatus.InProgress]: Todo[];
  [TodoStatus.Completed]: Todo[];
}

const defaultVal = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title: 'Learn Vuejs',
      description: 'Watch videos',
      status: TodoStatus.Pending,
    },
  ],
  [TodoStatus.InProgress]: [],
  [TodoStatus.Completed]: [],
};

const todoStore = reactive<TodoStore>(defaultVal);

export default () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => {
    return computed(() => todoStore[todoStatus]);
  };

  const addNewTodo = (todo: Todo) => {
    console.log(todoStore, todo);
    todoStore[todo.status].push(todo);
  };

  const updateTodo = (todo: Todo, newStatus: TodoStatus) => {
    todo.status = newStatus;
  };
  const deleteTodo = (todoToDelete: Todo) => {
    todoStore[todoToDelete.status] = todoStore[todoToDelete.status].filter(
      (todo) => todo.id != todoToDelete.id,
    );
  };

  return { getTodosByStatus, addNewTodo, deleteTodo, updateTodo };
};

