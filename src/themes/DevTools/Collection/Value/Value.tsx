import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

export default function({ component, property, initial }: any) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(initial);
  const { Set } = useContext(ThemeContext);

  const onChange = (e: any) => setValue(e.target.value);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  return !edit ? (
    <p onClick={() => setEdit(!edit)}>{value}</p>
  ) : (
    <input
      onClick={e => e.stopPropagation()}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          Set(component, property, value);
          setEdit(false);
        }
      }}
      value={value}
      onChange={onChange}
    />
  );
}
