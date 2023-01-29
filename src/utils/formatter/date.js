import { extractNumber } from "..";

const REGEX = /^(\d{0,4})(\d{0,2})(\d{0,2})$/g;

const dateFormat = (value) => {
  const number = extractNumber(value);
  return number.replace(REGEX, "$1-$2-$3").replace(new RegExp(`-+$`, "g"), "");
};

export default dateFormat;
