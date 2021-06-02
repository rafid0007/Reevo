import { useState } from "react";
const useInputState = (initialVal = null) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
    console.log(value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};

export default useInputState;