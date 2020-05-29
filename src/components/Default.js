import React, {Component} from 'react';
import Tabs from "./tabs";


class Default extends Component {
    componentDidMount() {
        console.log("c.did.mont defult");
    }
    render() {
        return (
            <div>
                <p>defult</p>
                <Tabs/>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-image">
                                <img src="img/a50.jpg" alt="a50"/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                                        className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am
                                    convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;
