import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'react-redux'






ReactDOM.render(<App />, document.getElementById('root'));