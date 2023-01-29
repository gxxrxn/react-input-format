import DateInput from "./DateInput";
import NumberInput from "./NumberInput";
import PhoneInput from "./PhoneInput";

const Input = ({ type }) => {
  switch (type) {
    case "number":
      return <NumberInput />;
    case "date":
      return <DateInput />;
    case "phone":
      return <PhoneInput />;
    default:
      return <input />;
  }
};

export default Input;
