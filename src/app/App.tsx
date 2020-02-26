import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";

import { Playground, Container, InputContainer, Input } from "./styles";

export function App() {
  const { register, control, handleSubmit } = useForm();

  const submitHandler = (data: any) => {
    const weekDays = Object.entries(data).map((field: any) => {
      if (!["monday", "tuesday", "wednesday", "thursday"].includes(field[0])) {
        return;
      }

      if (field[1] === true) {
        return field[0];
      }
    });

    console.log(weekDays.filter((value: any) => value));
  };

  return (
    <Playground>
      <Container>
        <InputContainer>
          <Input />
        </InputContainer>
      </Container>
    </Playground>
  );
}
