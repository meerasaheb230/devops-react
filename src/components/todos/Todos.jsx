
import axios from "axios";
import { TodoList } from "./components/todo-list/TodoList";
import "./Todos.css";
import { useRef,useState,useEffect } from "react";
export const Todos = () => {
  const todoRef = useRef();
  const [todoItem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todoItem.trim().length === 0) {
      console.error("Empty todo is not allowed");
      return;
    }
    const token = localStorage.getItem("accessToken");
    axios
      .post(
        "http://localhost:3001/api/todos",
        { todo: todoItem },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          const todo = response.data.data.todo;
          setTodos([...todos, todo]);
        }
      })
      .catch((error) => console.error(error));
    setTodoItem("");
  };

  const updateTodoItemData = (e) => {
    setTodoItem(e.target.value);
  };

  const handleTodoDelete = (todoId) => {
    const token = localStorage.getItem("accessToken");
    axios
      .delete(`http://localhost:3001/api/todos/${todoId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          const filteredTodos = todos.filter(({ _id }) => _id !== todoId);
          setTodos(filteredTodos);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3001/api/todos", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const todos = response.data.data.todos;
        setTodos(todos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="todos">
      <div className="todos__header">
        <h1 className="page-title">Todos</h1>
      </div>
      <div className="todos__body">
        <TodoList todos={todos} handleTodoDelete={handleTodoDelete} />
      </div>
      <div className="todos__footer">
        <form
          className="todo-form spaced-form"
          onSubmit={handleTodoSubmit}
          ref={todoRef}
        >
          <div className="input-group">
            <label htmlFor="todo">What you want to do?</label>
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="What you want to do?"
              className="input-control"
              value={todoItem}
              onChange={updateTodoItemData}
            />
          </div>
          <div className="input-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// };

