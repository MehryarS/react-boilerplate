import React from "react";
import ReactDOM from "react-dom";
import {Helmet} from "react-helmet";

import './../style/app.scss';

const App = () => {
    return ( 
    <div >
        <Helmet>
            <meta charSet="utf-8" />
            <title>React is here!</title>
        </Helmet>
        <p > React is here! </p> 
    </div>
    );
};

export default App;
ReactDOM.render( < App /> , document.getElementById("app"));