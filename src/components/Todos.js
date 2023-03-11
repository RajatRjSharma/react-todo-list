import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container mb-5 w-50">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos && props.todos.length > 0 ? (
        props.todos.map((todo) => {
          return (
            <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
          );
        })
      ) : (
        <p className="text-center">No Todos to show..</p>
      )}
    </div>
  );
}
