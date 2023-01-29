import { useFormatInput } from "../hooks/useFormatInput";

const DateInput = () => {
  const { value, onChange } = useFormatInput("date", "");
  return <input onChange={onChange} value={value} maxLength={10} />;
};

export default DateInput;
