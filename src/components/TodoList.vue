<script setup lang="ts">
import TodoGroup from "./TodoGroup.vue";
</script>

<template>
    <div>
        <TodoGroup :status="TodoStatus.Pending" />
        <TodoGroup />
        <TodoGroup />
    </div>
</template>