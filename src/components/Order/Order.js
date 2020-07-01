import React from 'react';
import styles from './Order.module.css';

const order = props => {

     let ingredientes = [];
     for(let nombreIngrediente in props.ingredientes){
        ingredientes.push(
            {
                id:nombreIngrediente, 
                nombre:nombreIngrediente,
                cantidad:props.ingredientes[nombreIngrediente]
        })
     }

     const salidaIngredientes = ingredientes.map(ingrediente => {

         return (<span style={{

                        textTransform: 'capitalize',
                        display:'inline-block',
                        border: '1px solid #ccc',
                        padding:'5px',
                        margin: '0px 5px'

                    }}>{ingrediente.nombre}({ingrediente.cantidad})</span>
                )
     })
     
    return (
        <div className={styles.Order}>
            <p>Cliente: {props.cliente}</p>
            <p>Ingredientes:{salidaIngredientes}</p>
            <p>Precio total: <strong>{props.precioTotal}</strong></p>
        </div>
    )
} 
export default order;