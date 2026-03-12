import { useState } from "react";

export function useForm(defaultValue) {
  const [values, setValues] = useState(defaultValue);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    
  }

  return { values, setValues, handleChange };
}
