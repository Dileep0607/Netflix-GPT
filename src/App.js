import React from "react";
import ReactDOM from 'react-dom/client';

const App = () =>{
    return(
        <div className="text-red-700 bg-black">
            <h1>🚀Netflix-GPT from React</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)