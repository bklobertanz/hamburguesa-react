import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (

    <React.Fragment>
        <Backdrop clicked={props.cancelOrder} show={props.showModalBool}/>
        <div 
            className={styles.Modal}
            style= {{
                    transform: props.showModalBool ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showModalBool ? '1':'0'
            }}>
            {props.children}
        </div>
    </React.Fragment>
        

)

export default Modal;