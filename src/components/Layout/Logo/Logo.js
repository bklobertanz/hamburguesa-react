import React from 'react';
import burgerLogo from '../../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = props => {
    return <img 
                className={styles.Logo} 
                style={{height:props.height}}
                src={burgerLogo} 
                alt=''/>
}

export default logo;