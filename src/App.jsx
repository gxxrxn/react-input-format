import Input from "./components/Input";

function App() {
  return (
    <>
      <p>숫자</p>
      <Input type="number" />
      <p>휴대폰 번호</p>
      <Input type="phone" />
      <p>날짜</p>
      <Input type="date" />
    </>
  );
}

export default App;
