import "./App.css";
import CurrencyInput from "./components/CurrencyInput";
import { useState } from "react";

const EXCHANGE = 1300;
function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  // 환율
  const onChange = (currency, input) => {
    1;
    if (currency === "krw") {
      setState({
        krw: input,
        usd: input / EXCHANGE,
      });
    } else {
      setState({
        krw: input * EXCHANGE,
        usd: input,
      });
    }
  };

  return (
    <div className="App">
      <h1>환율 변환기 (KRW - USD)</h1>
      <div>
        <CurrencyInput currency={"krw"} input={state.krw} onChange={onChange} />
        <CurrencyInput currency={"usd"} input={state.usd} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
