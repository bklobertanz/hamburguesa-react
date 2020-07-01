import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './CheckoutForm.module.css';
import axios from '../../../axion-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/InputForm/InputForm';

import { connect } from 'react-redux';

class CheckoutForm extends Component{

    state = {

        formularioPedido: {
                cliente: {
                    nombre:{
                        tipoElemento: 'input',
                        configuracionElemento: {
                            tipo: 'text',
                            placeholder: 'Nombre',
                            
                        },
                        value: '',
                        isValid: false,
                        toached: false,
                        validation: {
                            required: true,
                            minLength: 2
                        }
        
                    },
                    apellido:{
                        tipoElemento: 'input',
                        configuracionElemento: {
                            tipo: 'text',
                            placeholder: 'Apellido',
                            
                        },
                        value: '',
                        isValid: false,
                        toached: false,
                        validation: {
                            required: true,
                            minLength: 2
                        }
        
                    },
                    celular: {
                        tipoElemento: 'input',
                        configuracionElemento: {
                            tipo: 'number',
                            placeholder: 'Celular',
                            
                        },
                        value: '',
                        isValid: false,
                        toached: false,
                        validation: {
                            required: true,
                            minLength: 8,
                            maxLength: 8
                        }
        
                    },
                    direccion: {
                        tipoElemento: 'input',
                        configuracionElemento: {
                            tipo: 'text',
                            placeholder: 'Dirección',
                            
                        },
                        value: '',
                        isValid: false,
                        toached: false,
                        validation: {
                            required: true,
                        }
        
                    },
                    tipoEnvio: {
                        tipoElemento: 'select',
                        configuracionElemento: {
                            options:[{value:'rapido', displayValue:'Rápido'},
                                     {value:'barato', displayValue:'Barato'}],
                            placeholder: 'Tipo de Envio'
                        },
                        value: 'rapido',
                        isValid: true,
                        toached: false
        
                    }
                }
        },
        formIsValid: false,
        loading: false,
        
    }
    submitOrderHandler = event =>{
        event.preventDefault();
        this.setState({loading:true});
        let orderForm = {}; 

        for(let elemId in this.state.formularioPedido.cliente){
            orderForm[elemId] = this.state.formularioPedido.cliente[elemId].value;
        }
        const order={
            ingredientes: this.props.ings,
            precio: this.props.price.toFixed(2),
            cliente: orderForm
        }
        axios.post('orders.json', order)
            .then(response => {
                this.setState({loading:false})
                console.log(response)
                this.props.history.push('/');
            });
        
    }
    checkValidity = (elemValue, elemRules) =>{
        let isValid = false; 
        if(elemRules.required){
            isValid = elemValue.trim() !== '';
        }
        if(elemRules.minLength){
            isValid = elemValue.length >= elemRules.minLength && isValid;
        }
        if(elemRules.maxLength){
            isValid = elemValue.length <= elemRules.maxLength && isValid;
        }

        return isValid; 
    }
    formChangedHandler = (event, campoOrden) => {

        let formOrdenActualizada = {
            ...this.state.formularioPedido
        }
       
        let ordenClienteActualizada = {
            ...formOrdenActualizada['cliente']
        }
        let  campoOrdenActualizado = {
            ...ordenClienteActualizada[campoOrden]
        }
        campoOrdenActualizado.value = event.target.value; 
        campoOrdenActualizado.isValid = this.checkValidity(event.target.value, campoOrdenActualizado.validation);
        campoOrdenActualizado.touched = true; 
        ordenClienteActualizada[campoOrden] = campoOrdenActualizado;
        formOrdenActualizada['cliente'] = ordenClienteActualizada;
        
        this.setState({formularioPedido: formOrdenActualizada});

       let arrAreValid = [];
       for(let nombreCampo in ordenClienteActualizada){

        arrAreValid.push(ordenClienteActualizada[nombreCampo].isValid);
       }

       if(arrAreValid.every((campo) => campo)){
           this.setState({formIsValid: true})
       }  
    }



    render(){
        let form = null;
        let arregloFormularioOrden = [];
        if(this.state.loading){
            form = <Spinner/>
        }
        else
        {

            const formularioOrdenCliente = this.state.formularioPedido.cliente; 
            
            for (const campoFormulario in formularioOrdenCliente) {
                    arregloFormularioOrden.push({
                        id: campoFormulario,
                        config: formularioOrdenCliente[campoFormulario]
                    });
                }
        }

        form = (    
            <>
                <h4>Ingresa tu información</h4>
                <form onSubmit={this.submitOrderHandler}>
                    {arregloFormularioOrden.map(campoFormulario =>(
                        <Input
                            key={campoFormulario.id}
                            config={campoFormulario.config}
                            changed= {(event) => this.formChangedHandler(event,campoFormulario.id)}
                            value={campoFormulario.config.value}
                            valid={campoFormulario.config.isValid}
                            touched={campoFormulario.config.touched}
                            />
                    ))}
                    <Button disabled={!this.state.formIsValid} classType='Success'>CONFIRMAR PEDIDO</Button>
                </form>
            </>
        );
        return (
            <div className={styles.CheckoutForm}>
                {form}
            </div>

        )
    }
}

const mapStateToProps = state =>{

    return{
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(CheckoutForm);