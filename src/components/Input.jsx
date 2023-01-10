import { useInput } from "../hooks/useInput";

function Input({ rule, maxLen = 20 }) {
  const [value, onChange] = useInput(rule);

  return <input onChange={onChange} value={value} maxLength={maxLen} />;
}

export default Input;
