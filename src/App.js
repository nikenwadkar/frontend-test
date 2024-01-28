import logo from './logo.svg';
import './App.css';
import React, { useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const handleGetData = () => {

    axios
      .get(
        // api in not made
        `http://localhost:3001/api/v1/appointments`,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          },
        }
      )
      .then((res) => {
        console.log(res.data.ResponseData);
        setData(JSON.stringify(res.data) );
       
      })
      .catch((err) => {
       
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button
          type="button"
          className="btn btn-success btn-sm pull-left "
          onClick={handleGetData}
        >
           Get List
        </button>
        <div>
          {data}
        </div>
      </header>
    </div>
  );
}

export default App;
