<script lang="ts">
enum TodoStatus {
    Pending = "pending",
    InProgress = "inProgress",
    Completed = "completed",
}

interface Todo {
    id: number;
    title: string;
    description: string;
    status: TodoStatus;
}

const pendingTodos: Todo[] = [
    {
    id: 1,
    title: "Learn Vuejs",
    description: "Watch videos",
    status: TodoStatus.Pending,
    },
];
</script>

<template>
    <div>
        <h3>Pending</h3>
        <ul>
            <li v-for="todo in pendingTodos" :key="todo.id">{{ todo.title }}</li>
        </ul>
    </div>
</template>