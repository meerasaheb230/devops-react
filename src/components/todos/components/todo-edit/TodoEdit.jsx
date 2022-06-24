import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const TodoEdit = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({ todo: "" });
  const { id: todoId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get(`http://localhost:3001/api/todos/${todoId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setTodo(response.data.data.todo);
        }
      })
      .catch((error) => console.error(error));
  }, [todoId]);

  const handleTodoEdit = (e) => {
    e.preventDefault();
    if (todo.todo.trim().length === 0) {
      return;
    }
    const token = localStorage.getItem("accessToken");
    axios
      .put(`http://localhost:3001/api/todos/${todo._id}`, todo, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          navigate("/todos");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleOnChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <form className="todo-form spaced-form" onSubmit={handleTodoEdit}>
      <div className="input-group">
        <label htmlFor="todo">What you want to do?</label>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="What you want to do?"
          className="input-control"
          value={todo.todo}
          onChange={handleOnChange}
        />
      </div>
      <div className="input-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};