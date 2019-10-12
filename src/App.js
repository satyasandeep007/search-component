import React, { Fragment } from "react";
import Register from "./components/Register";
import Search from "./components/Search";
import 'react-splitter-layout/lib/index.css';

class App extends React.Component {
  render() {

    return (
      <div>         
          <React.Fragment>
             <Search /> 
             <Register />
          </React.Fragment>
      </div>
    );
  }
}

export default App;
