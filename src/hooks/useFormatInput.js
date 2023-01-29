import { useState } from "react";

import formatter from "../utils/formatter/index";

export const useFormatInput = (type, initialValue = "") => {
  const format = formatter(type);
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const { value } = e.target;
    const formattedValue = format(value);
    setValue(formattedValue);
  };

  return { value, onChange };
};
