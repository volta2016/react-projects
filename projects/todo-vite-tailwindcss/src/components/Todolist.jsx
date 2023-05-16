import React from "react";
import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const Todolist = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <ul
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="overflow-hidden rounded-t-md bg-white transition-all duration-700 dark:bg-gray-800 [&>article]:p-4"
        >
          {todos.map((todo, index) => (
            <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
              {(draggableProvided) => (
                <TodoItem
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                  todo={todo}
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default Todolist;
