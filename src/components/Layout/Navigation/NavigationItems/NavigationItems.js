import React from 'react';
import styles from './NavigationItems.module.css';
import {NavLink} from 'react-router-dom';

const navigationItems = () =>{
    return (
            <ul className={styles.NavigationItems}>
                <li><NavLink activeClassName={styles.active} to='/' exact>Burger Builder</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/orders'>Orders</NavLink></li>
            </ul>
    )
}

export default navigationItems;