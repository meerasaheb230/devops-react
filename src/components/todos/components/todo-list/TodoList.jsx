// import { TodoItem } from "../todo-item/TodoItem";

// export const TodoList = ({ todos, handleTodoDelete }) => {
//   const onTodoDelete = (todoId) => {
//     handleTodoDelete(todoId);
//   };
//   return (
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <TodoItem todo={todo} key={todo._id} onTodoDelete={onTodoDelete} />
//       ))}
//     </ul>
//   );
// };

import { TodoItem } from "../todo-item/TodoItem";

export const TodoList = ({ todos, handleTodoDelete }) => {
  const onTodoDelete = (todoId) => {
    handleTodoDelete(todoId);
  };
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo._id} onTodoDelete={onTodoDelete} />
      ))}
    </ul>
  );
};