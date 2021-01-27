/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./todoForm.module.css";
import * as styles from "./todoform.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Tidak boleh kosong!");
      return;
    }

    if (value.length > 40) {
      alert("Tidak boleh lebih dari 40 karakter");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  const theme = useTheme();

  if (showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
