import React from 'react';
import './Display.scss';
import './Calculator.scss';
import './Calculator2.scss';

function Display() {
  const [r, res] = React.useState('');
  const [entryN, setEntry] = React.useState('');
  const [entryN2, setEntry2] = React.useState('');
  const [sign, setSign] = React.useState('');
  const [m, setMinus] = React.useState('');

  function entry(number) {
    if (entryN.length < 9 && entryN2.length < 9) {
      if (sign === '') {
        setEntry(entryN + number);
      } else {
        setEntry2(entryN2 + number);
      }
    }
  }

  function symbol(valorSym) {
    setSign(valorSym);
  }

  function minus(valorMinus) {
    setMinus(valorMinus);
  }

  function operand() {
    switch (sign) {
      case '*':
        res(Number(entryN) * Number(entryN2));
        //   if(res <= 999999999){
        //   }else{
        //     res("ERROR")
        //   }
        break;
      case '//':
        res(Number(entryN) / Number(entryN2));
        break;
      case '+':
        res(Number(entryN) + Number(entryN2));
        break;
      case '-':
        res(Number(entryN) - Number(entryN2));
        break;
      case '/':
        res(Number(entryN) % Number(entryN2));
        break;
      default:
        // do nothing
    }
  }

  function erase() {
    res('');
    setEntry('');
    setEntry2('');
    setMinus('');
  }

  return (
    <div className="display">
      <div className="display2">
        {m ? m + entryN : (r || (!sign ? entryN : entryN2))}
      </div>
      <div className="calcu">
        <div className="grid-button">
          <button type="button" onClick={erase} className="btn">C</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { minus('-'); }} className="btn">+/-</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { symbol('/'); }} className="btn">%</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { symbol('/'); }} className="btn2">➗</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(7); }} className="btn">7</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(8); }} className="btn">8</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(9); }} className="btn">9</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { symbol('*'); }} className="btn2">✖️</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(4); }} className="btn">4</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(5); }} className="btn">5</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(6); }} className="btn">6</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { symbol('-'); }} className="btn2">➖</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(1); }} className="btn">1</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(2); }} className="btn">2</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { entry(3); }} className="btn">3</button>
        </div>
        <div className="grid-button">
          <button type="button" onClick={() => { symbol('+'); }} className="btn2">➕</button>
        </div>
      </div>
      <div className="calcu2">
        <div className="grid-buttonC2">
          <button type="button" onClick={() => { entry(0); }} className="btnC3">0</button>
        </div>
        <div className="grid-buttonC2">
          <button type="button" className="btnC2">.</button>
        </div>
        <div className="grid-buttonC2">
          <button type="button" onClick={operand} className="btnC22">🟰</button>
        </div>
      </div>
    </div>
  );
}

export default Display;
