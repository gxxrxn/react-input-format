import number from "./number";
import phone from "./phone";
import date from "./date";

const FORMATTERS = { number, phone, date };
const formatter = (type) => FORMATTERS[type];

export default formatter;
