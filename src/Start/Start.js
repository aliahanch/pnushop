import React, {Component} from 'react';
import './styleStart.css';
import {Spinner} from 'react-spinners-css';


class Start extends Component {
    render() {
        return (
            <div className="Ali">
                <p className="spin"><Spinner color="#343334" size={50}/>
                </p>
            </div>
        )}
}

export default Start;
