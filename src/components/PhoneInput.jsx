import { useFormatInput } from "../hooks/useFormatInput";

const PhoneInput = () => {
  const { value, onChange } = useFormatInput("phone", "");
  return <input onChange={onChange} value={value} maxLength={13} />;
};

export default PhoneInput;
