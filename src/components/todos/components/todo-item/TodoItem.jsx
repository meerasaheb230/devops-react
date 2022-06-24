// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

// export const TodoItem = ({ todo, onTodoDelete }) => {
//   const handleTodoDelete = () => {
//     onTodoDelete(todo._id);
//   };
//   return (
//     <li
//       key={todo._id}
//       className={`todo-item ${todo.isCompleted ? "todo-item--completed" : ""}`}
//     >
//       <div className="todo-content">
//         {todo.todo}
//       </div>
//       <div className="todo-action">
//         <Link to={"/todos/" + todo._id}>
//           <FontAwesomeIcon icon={faPen} />
//         </Link>
//         <button onClick={handleTodoDelete} className="btn-delete">
//           <FontAwesomeIcon icon={faTrash} />
//         </button>
//       </div>
//     </li>
//   );
// };

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export const TodoItem = ({ todo, onTodoDelete }) => {
  const handleTodoDelete = () => {
    onTodoDelete(todo._id);
  };
  return (
    <li
      key={todo._id}
      className={`todo-item ${todo.isCompleted ? "todo-item--completed" : ""}`}
    >
      <div className="todo-content">
        {todo.todo}
      </div>
      <div className="todo-action">
        <Link to={"/todos/" + todo._id}>
          <FontAwesomeIcon icon={faPen} />
        </Link>
        <button onClick={handleTodoDelete} className="btn-delete">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};