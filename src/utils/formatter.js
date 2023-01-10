const PHONE_DELIMETER = "-";
const DATE_DELIMETER = "-";
const TIME_DELIMETER = ":";

const regexNumber = /[^0-9]/g;
const regexPhone = /^(\d{0,3})(\d{0,4})(\d{0,4})$/g;
const regexDate = /^(\d{0,4})(\d{0,2})(\d{0,2})$/g;

const formatData = {
  phone: {
    allowValue: regexNumber,
    searchValue: regexPhone,
    replaceValue: `$1${PHONE_DELIMETER}$2${PHONE_DELIMETER}$3`,
    delimeter: PHONE_DELIMETER,
  },
  date: {
    allowValue: regexNumber,
    searchValue: regexDate,
    replaceValue: `$1${DATE_DELIMETER}$2${DATE_DELIMETER}$3`,
    delimeter: DATE_DELIMETER,
  },
};

const format = (value, options) => {
  const { allowValue, searchValue, replaceValue, delimeter } = options;

  return value
    .replace(allowValue, "")
    .replace(searchValue, replaceValue)
    .replace(new RegExp(`${delimeter}+$`, "g"), "");
};

export const getFormatter = (type) => (v) => {
  switch (type) {
    case "number":
      return v.replace(regexNumber, "");
    case "phone":
      return format(v, formatData.phone);
    case "date":
      return format(v, formatData.date);
  }
};
