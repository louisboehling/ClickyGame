import React, { Component } from 'react';
import Header from "./components/header";
import Pictures from "./components/pictures";
import Wrapper from "./components/wrapper";
import Footer from "./components/footer";


class App extends Component {
  render() {
    return (
    <Wrapper> 
      <Header />
      <Pictures />
      
    </Wrapper>
    );
  }
}

export default App;
