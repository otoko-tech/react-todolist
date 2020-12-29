import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar Javascript"
    },
    {
      text: "Belajar React Native Javascript"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Javascript"
    },
    {
      text: "Belajar Native Javascript"
    },
    {
      text: "Belajar React"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
