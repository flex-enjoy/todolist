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