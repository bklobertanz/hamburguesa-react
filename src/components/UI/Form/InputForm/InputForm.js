import React from 'react';
import styles from './InputForm.module.css';

const inputForm = props => {
    let input = null; 
    let arregloOptions = props.config.configuracionElemento.options;
    let inputValid = props.valid; 
    let formTouched = props.touched; 
    let classes = styles.InputElement;
    let errorMsg = '';

    if(formTouched && !inputValid){
       classes =  styles.InputElement +' '+ styles.Invalid;
       errorMsg = <p style={{textAlign: 'left', color: 'red'}}>Por favor, ingrese un valor válido!</p>;
    }

    switch(props.config.tipoElemento){

       case 'input':
           input = <input className={ classes }  
                    onChange={props.changed}
                    value={props.value}
                    {...props.config.configuracionElemento}/>
           break; 
        case 'textarea':
            input = <textarea className={inputValid? styles.InputElement : styles.InputElement +' '+ styles.Invalid} 
                    onChange={props.changed}
                    value={props.value}
                    {...props.config.configuracionElemento}/>
            break;
        case 'select':
            input = (<select className={inputValid? styles.InputElement : styles.InputElement +' '+ styles.Invalid}
                            onChange={props.changed}
                            value={props.value}>
                                {arregloOptions.map(option =>(
                                     <option key={option.value} value={option.value}>{option.displayValue}</option>
                                ))}
                    </select>
                    )
            break;
        default: 
            input = <input className={inputValid? styles.InputElement : styles.InputElement +' '+ styles.Invalid} 
                    onChange={props.changed}
                    {...props.config.configuracionElemento}/>
            break; 
    }
    return (
        <div className={styles.InputForm}>
            <label className={styles.Label}>{props.config.configuracionElemento.placeholder}</label>
            {errorMsg}
            {input}
        </div>
        
    )
}

export default inputForm;