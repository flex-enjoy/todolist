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
    todoStore[todo.status].push(todo);
  };

  return { getTodosByStatus, addNewTodo };
};

