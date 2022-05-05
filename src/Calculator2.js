import React from 'react';
import './Calculator2.css';

class Calculator2 extends React.Component {
    render() {
        return (
            <div className='calcu2'>
                <div className="grid-buttonC2">
                    <button type="button" className="btnC3">0</button>
                </div>  
                <div className="grid-buttonC2">
                    <button type="button" className="btnC2">.</button>
                </div>  
                <div className="grid-buttonC2">
                    <button type="button" className="btnC22">🟰</button>
                </div> 
            </div>
        );
    }
}
export default Calculator2;