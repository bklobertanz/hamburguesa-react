import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import menuStyle from './BurgerMenu.module.css';


const toolbar = props =>{
    
    return (
        <header className={styles.Toolbar}>
            <div
                className={menuStyle.DrawerToggle}
                onClick={props.backdropHandler}          
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo height='80%'/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default toolbar;