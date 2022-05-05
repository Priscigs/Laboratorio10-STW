import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    render() {
        return (
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
                    <button type="button" className="btn">7</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">8</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">9</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn2">✖️</button>
                </div>   
                <div className="grid-button">
                    <button type="button" className="btn">4</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">5</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">6</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn2">➖</button>
                </div>   
                <div className="grid-button">
                    <button type="button" className="btn">1</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">2</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn">3</button>
                </div>  
                <div className="grid-button">
                    <button type="button" className="btn2">➕</button>
                </div>   
            </div>
        );
    }
}
export default Calculator;