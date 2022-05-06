import React from 'react';
import './Display.css';
import './Calculator.css';
import './Calculator2.css'

function Display() {
    const [entryN, setEntry] = React.useState("");

    function entry(number) {
        setEntry(entryN + number)
    }
    return (
        <div className='display'>
            
            <div className='display2'>
                {entryN}
            </div>
            <div className='calcu'>
                <div className="grid-button">
                    <button type="button" className="btn">C</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">+/-</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">%</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn2">➗</button>
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
                    <button type="button" className="btn2">✖️</button>
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
                    <button type="button" className="btn2">➖</button>
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
                    <button type="button" className="btn2">➕</button>
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
                    <button type="button" className="btnC22">🟰</button>
                </div> 
            </div>
        </div>
    );
}

export default Display;