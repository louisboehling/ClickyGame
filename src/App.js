import React, { Component } from 'react';
import Wrapper from "./components/wrapper";
import ButtonAppBar from "./components/navbar";
import FullWidthGrid from "./components/pictures";
import Header from "./components/header";
import Footer from "./components/footer";


class App extends Component {
  render() {
    return (
    <Wrapper> 
      <ButtonAppBar />
      <Header />
      <FullWidthGrid />
      <Footer />
    </Wrapper>
    );
  }
}

export default App;
