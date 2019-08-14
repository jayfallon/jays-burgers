import React, { Component } from 'react';
import Aux from '../../Hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
         );
    }
}
 
export default BurgerBuilder;
