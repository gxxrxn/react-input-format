import { useCallback, useState } from "react";

export const useInput = (rule, initValue = "") => {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    (e) => {
      const { value } = e.target;
      const { data } = e.nativeEvent;

      const formattedValue = rule(value, data);
      setValue(formattedValue);
    },
    [value]
  );

  return [value, onChange];
};
