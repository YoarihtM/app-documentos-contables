import React from "react";
import ReactDOM from "react-dom/client";
import { DocContApp } from './DocContApp';
import './styles.css'
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        {/* <DocContApp title="Hola, soy vegeta" /> */}
        <CounterApp />
    </React.StrictMode>
);