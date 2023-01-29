import { extractNumber } from "..";

const numberFormat = (value) => {
  const number = extractNumber(value);
  return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export default numberFormat;
