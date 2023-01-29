import { extractNumber } from "..";

const DELIMETER = "-";
const REGEX = /^(\d{0,3})(\d{0,4})(\d{0,4})$/g;

const phoneFormat = (value) => {
  const number = extractNumber(value);
  return number.replace(REGEX, "$1-$2-$3").replace(new RegExp(`${DELIMETER}+$`, "g"), "");
};

export default phoneFormat;
