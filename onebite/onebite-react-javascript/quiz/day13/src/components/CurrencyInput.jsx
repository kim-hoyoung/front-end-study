const CurrencyInput = ({ currency, input, onChange }) => {
  return (
    <div>
      {currency}
      <input
        value={input}
        onChange={(e) => {
          onChange(currency, e.target.value);
        }}
      ></input>
    </div>
  );
};

export default CurrencyInput;
