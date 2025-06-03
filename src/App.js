import React from "react";
import ReactDOM from 'react-dom/client';
import Body from "./components/Body.js";

const App = () =>{
    return(
        <div>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)