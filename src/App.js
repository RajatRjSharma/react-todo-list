import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [todos, updateTodos] = useState(() => {
    const lstodos = localStorage.getItem("todos");
    if (lstodos) return JSON.parse(lstodos);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function onDelete(deleteTodo) {
    updateTodos(todos.filter((todo) => deleteTodo !== todo));
  }

  function addTodo(title, desc) {
    let add = {
      sno: todos && todos.length > 0 ? todos[todos.length - 1].sno + 1 : 0,
      title: title,
      desc: desc,
    };

    updateTodos([...todos, add]);
  }

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About title="My Todos List" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
