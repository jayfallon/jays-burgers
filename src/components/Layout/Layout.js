import React from 'react';
import Aux from '../../Hoc/Aux/Aux';
import classes from './Layout.module.css';

const layout = (props) => {
    return ( 
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.content}>{props.children}</main>
        </Aux>
     );
};
 
export default layout;
