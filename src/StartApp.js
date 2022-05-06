import React from 'react';
import './StartApp.css';
import Header from './Header';
import Display from './Display';

class StartApp extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Display></Display>
            </div>
        );
    }
}
export default StartApp;