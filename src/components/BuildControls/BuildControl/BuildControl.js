import React from 'react';
import styles from './BuildControl.module.css'

const  buildControl = props => {

 return(
        <div className={styles.BuildControl}>
            <p className={styles.Label}>{props.ingredientLabel}</p>
            <button onClick = {() => props.addedIngredient(props.ingredientLabel)} className={styles.More}>+</button>
            <button onClick = {() => props.removedIngredient(props.ingredientLabel)} className={styles.Less} disabled={props.disabledControl}>-</button>
        </div>
 )
}
export default buildControl;
