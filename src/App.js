import React, { Component } from "react";
import { Provider } from 'react-redux'
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Main from "./components/Main";
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
      </Provider>
    );
  }
}

export default App;
