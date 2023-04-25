export interface Todo {
  id: string;
  title: string;
  description: string;
  state: boolean | string;
  priority?: boolean;
}

export type DeleteTodoFunction = (id: string) => number | void;
export type UpdateTodoFunction = (id: string) => void;

export interface TodosProps {
  todos: Todo[];
  deleteTodo: DeleteTodoFunction;
  updateTodo: UpdateTodoFunction;
}
