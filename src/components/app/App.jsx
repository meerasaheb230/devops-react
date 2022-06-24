import { Routes, Route } from "react-router-dom";
import { Todos } from "../todos/Todos";
import { TodoEdit } from "../todos/components/todo-edit/TodoEdit";
import { Greet } from "../greet/Greet";
import { Navbar } from "../common/navbar/Navbar";
import { SignIn } from "../sign-in/SignIn";
import { SignUp } from "../sign-up/SignUp";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<TodoEdit />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<h1>Base Route</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;