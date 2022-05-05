import React from 'react';
import './StartApp.css';
import Header from './Header';
import Calculator from './Calculator';
import Display from './Display';

class StartApp extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Display></Display>
                <Calculator></Calculator>
            </div>
        );
    }
}
export default StartApp;