import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }
  render() { 
    return ( 
      <Layout>
      <BurgerBuilder/>
    </Layout>
     );
  }
}
 
export default App;

