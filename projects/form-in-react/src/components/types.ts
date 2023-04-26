export interface Todo {
  id: string;
  title: string;
  description: string;
  state: boolean | string;
  priority?: boolean;
}

export type DeleteTodoFunction = (id: string) => string;
export type UpdateTodoFunction = (id: string) => string;

export interface TodosProps {
  todos: Todo[];
  deleteTodo: DeleteTodoFunction;
  updateTodo: UpdateTodoFunction;
}
