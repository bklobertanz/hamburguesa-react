import React from 'react';
import WithClass from '../hoc/withClass';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';


const buildControls = props => {
    
    const ingKeys =['salad','bacon','cheese','meat'];

    let controls = ingKeys.map((ingKey,key) => 

        <BuildControl 
            key={key} 
            ingredientLabel={ingKey}
            disabledControl = {props.boolIngredients[ingKey]}
            addedIngredient = {() => props.addedIngredient(ingKey)}
            removedIngredient ={() => props.removedIngredient(ingKey)}
        />
    );

    return (
        <WithClass classes ={styles.BuildControls}>
            <p><strong>Precio total: {props.price.toFixed(2)}</strong></p>
            {controls}
            <button 
                onClick={props.modalHandler}
                className={styles.OrderButton}
                disabled={!props.purchaseBurger}
            >PAGAR</button>
        </WithClass>
        
    )
}
export default buildControls;
