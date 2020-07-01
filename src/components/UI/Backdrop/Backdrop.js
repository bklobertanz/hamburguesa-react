import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = props => (

    <div 
        onClick = {props.clicked}
        className={styles.Backdrop}
        style={{
            opacity: props.show ? '1' : '0',
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
        }}
    >
        
    </div>
)

export default backdrop;