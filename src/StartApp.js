import React from 'react';
import './StartApp.css';
import Header from './Header';
import Calculator from './Calculator';
import Display from './Display';
import Calculator2 from './Calculator2';

class StartApp extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Display></Display>
                <Calculator></Calculator>
                <Calculator2></Calculator2>
            </div>
        );
    }
}
export default StartApp;