/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";

// import styles from "./todos.module.css";
import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}

        {todos.length === 0 && (
          <div css={styles.todoPlaceholderText}>
            Klik tombol <span css={styles.addButtonPlaceholderText}>ADD</span>{" "}
            di atas untuk menambah todo baru
          </div>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
