import React from 'react';
import Aux from '../hoc/Aux';
import Button from '../UI/Button/Button';


const orderSummary = props =>{

    const orderItems = Object.keys(props.ingredients).map(ingredient =>{

                        return <li key={ingredient}>
                                    <span>{ingredient}: {props.ingredients[ingredient]}</span>
                                </li> 
    })

    return (      
        <Aux>
            <h3>Tu orden</h3>
            <p>Una deliciosa hamburguesa con los siguientes ingredientes:</p>
            <ul style={{textTransform: 'capitalize', textAlign: 'left'}}>
                {orderItems}
            </ul>
            <p style={{textAlign:'left'}}><strong>Precio total:${props.price.toFixed(2)}</strong></p>
            <p style={{textAlign:'left'}}>¿Continuar con la compra?</p>
            <div style={{display:'flex'}}>
                <Button classType="Danger" clicked={props.cancelOrder}>CANCELAR</Button>
                <Button classType="Success" clicked={props.continueOrder}>CONTINUAR</Button>
            </div>
        </Aux>
    );
}

export default orderSummary;