import React, {Component} from 'react';
import './styleStart.css';
import {Ring} from 'react-spinners-css';


class Start extends Component {
    render() {
        return (
            <div className="Ali">
                <p className="spin"><Ring color="#50AE65" size={150}/>
                </p>
            </div>
        )}
}

export default Start;