import Input from "./components/Input";
import { getFormatter } from "./utils/formatter";

function App() {
  return (
    <>
      <p>숫자</p>
      <Input rule={getFormatter("number")} key="number" />
      <p>휴대폰 번호</p>
      <Input rule={getFormatter("phone")} maxLen={13} key="phone" />
      <p>날짜</p>
      <Input rule={getFormatter("date")} maxLen={10} key="date" />
    </>
  );
}

export default App;
