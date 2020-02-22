import React from "react";
import { Playground } from "./styles";
import { useForm } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";

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
      <form onSubmit={handleSubmit(submitHandler)}>
        <input name="name" ref={register} />
        <input type="checkbox" name="monday" ref={register} />
        <input type="checkbox" name="tuesday" ref={register} />
        <input type="checkbox" name="wednesday" ref={register} />
        <input type="checkbox" name="thursday" ref={register} />
        <button type="submit">Okay</button>
      </form>
    </Playground>
  );
}
