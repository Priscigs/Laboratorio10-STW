import React from 'react';
import './Display.css';
import './Calculator.css';
import './Calculator2.css'

function Display() {
    const [r, res] = React.useState(0);
    const [entryN, setEntry] = React.useState("");
    const [entryN2, setEntry2] = React.useState("");
    const [sign, setSign] = React.useState("");

    function entry(number) {
        if(entryN.length < 9){
            if (sign === ""){
                setEntry(entryN + number)
            }
            else{
                setEntry2(entryN2 + number)
            }   
        }
    }

    function symbol (symbol) {
        setSign(symbol)
    }

    function operand () {
        switch (sign){
            case "*":
              if(res <= 999999999){
                res(Number(entryN) * Number(entryN2));
                break; 
              }else{
                res("ERROR")
                break; 
              }
            case "//":
              res(Number(entryN) / Number(entryN2));
              break; 
            case "+":
              res(Number(entryN) + Number(entryN2));
              break; 
            case "-":
              res(Number(entryN) - Number(entryN2));
              break; 
            case "/":
              res(Number(entryN) % Number(entryN2));
              break; 
        }
    }

    return (
        <div className='display'>
            
            <div className='display2'>
                {r ? r : (!sign ? entryN : entryN2)}
                {/* {entryN} */}
            </div>
            <div className='calcu'>
                <div className="grid-button">
                    <button type="button" className="btn">C</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {symbol ("/")}} className="btn">mod</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">%</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {symbol ("//")}} className="btn2">➗</button>
                </div>   
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (7)}} className="btn">7</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (8)}} className="btn">8</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (9)}} className="btn">9</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {symbol ("*")}} className="btn2">✖️</button>
                </div>   
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (4)}} className="btn">4</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (5)}} className="btn">5</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (6)}} className="btn">6</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {symbol ("-")}} className="btn2">➖</button>
                </div>   
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (1)}} className="btn">1</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (2)}} className="btn">2</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {entry (3)}} className="btn">3</button>
                </div>  
                <div className="grid-button">
                    <button type="button" onClick = {() => {symbol ("+")}} className="btn2">➕</button>
                </div>   
            </div>
            <div className='calcu2'>
                <div className="grid-buttonC2">
                    <button type="button" onClick = {() => {entry (0)}} className="btnC3">0</button>
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