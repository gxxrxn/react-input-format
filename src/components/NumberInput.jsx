import { useFormatInput } from "../hooks/useFormatInput";

const NumberInput = () => {
  const { value, onChange } = useFormatInput("number", "");
  return <input onChange={onChange} value={value} />;
};

export default NumberInput;
