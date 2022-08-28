import React, { useState } from "react";
import "./Calculator.css";
import { BsBackspace } from "react-icons/bs";

const Calculator = () => {
  const [result, setResult] = useState("");
  const clickhandler = (e) => {
    setResult(result.concat(e.target.value));
  };
  const cleardisplay = () => {
    setResult("");
  };
  const calulate = () => {
    setResult(eval(result));
  };
  const Removefromlast = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <>
      <div class="container">
        <h1>Calculator </h1>
        <div class="calculator">
          <input type="text" name="screen" id="screen" value={result} />
          <table>
            <tr>
              <td>
                <input type="button" value="ON" className="button" />
              </td>
              <td>
                <div className="button1" onClick={Removefromlast}>
                  <BsBackspace className="divbutton" />
                </div>
              </td>
              <td>
                <input
                  type="button"
                  onClick={cleardisplay}
                  value="C"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="%"
                  className="button"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="7"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="8"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="9"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="*"
                  className="button"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="4"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="5"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="6"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="-"
                  className="button"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="1"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="2"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="3"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="+"
                  className="button"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="0"
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="."
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={calulate}
                  value="="
                  className="button"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={clickhandler}
                  value="/"
                  className="button"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Calculator;
