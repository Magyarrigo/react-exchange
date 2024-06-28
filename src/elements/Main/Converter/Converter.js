import axios from "axios";
import { useState } from "react";
import "./Converter.css";

function Converter() {
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const amount = event.currentTarget.elements.amount.value;
    const isValueInvalid = isNaN(amount) || amount <= 0;
    if (isValueInvalid) {
      setError("wprowadź poprawną wartość: LICZBA DODATNIA");
      setResult(null);
      event.currentTarget.elements.amount.value = "";
      return;
    }
    const currency = event.currentTarget.elements.currencyName.value;
    axios
      .get(
        `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`
      )
      .then((response) => {
        const isDataValid =
          response.data.rates?.length > 0 && response.data.rates[0].mid;
        if (isDataValid) {
          const exchangeResult = (amount * response.data.rates[0].mid).toFixed(
            2
          );
          setResult(exchangeResult);
          console.log(result);
        } else {
          setError("nieoczekiwany błąd sieci");
        }
      })

      .catch(() => setError("nieoczekiwany błąd sieci"));
  };

  return (
    <div className="sectionContainer" id="converter">
      <div className="formContainer">
        <form className="dataEntryForm" onSubmit={handleSubmit}>
          <div className="dataEntryField">
            <label htmlFor="inputAmount" className="labelClass">
              wpisz wartosc
            </label>
            <input
              name="amount"
              className="dataField"
              type="text"
              id="inputAmount"
            />
          </div>

          <div className="dataEntryField">
            <label htmlFor="selectCurrency" className="labelClass">
              wybierz walute
            </label>
            <select
              name="currencyName"
              className="dataField"
              id="selectCurrency"
            >
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="USD">USD</option>
            </select>
          </div>

          <div className="dataEntryField">
            <label htmlFor="askForCurrencies" className="labelClass">
              nacisnij poniżej
            </label>

            <button
              type="submit"
              name="requestButton"
              className="dataField"
              id="askForCurrencies"
            >
              PRZELICZ
            </button>
          </div>

          <div className="resultField">
            <label htmlFor="conversionResult" className="labelClass">
              wartość waluty
            </label>
            <div
              name="conversResult"
              className="conversionResult dataField"
              id="conversionResult"
            >
              TO: {result} PLN
            </div>
          </div>
        </form>
        {error ? <p className="errorField">{error}</p> : null}
      </div>
    </div>
  );
}

export default Converter;
