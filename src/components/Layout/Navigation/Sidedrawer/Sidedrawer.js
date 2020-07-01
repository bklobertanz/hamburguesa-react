import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Sidedrawer.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sidedrawer = props =>{

    let classes = [styles.Sidedrawer,styles.Close];
    if (props.show) classes = [styles.Sidedrawer,styles.Open]
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={classes.join(' ')}>
                <Logo height='11%'/>
                <NavigationItems/>
            </div>
        </Aux>

    )
}

export default sidedrawer;