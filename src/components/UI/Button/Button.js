import React from 'react';
import styles from './Button.module.css';

const button = (props) =>{
    return (
    
        <button 
            className={[styles.Button, props.classType === 'Danger' ? styles.Danger : styles.Success].join(' ')}
            onClick={props.clicked}
            disabled={props.disabled}>
                {props.children}
        </button>
    )

}

export default button;