import React, {Component} from 'react'; 
import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import styles from './Checkout.module.css';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import {Route} from 'react-router-dom';

import { connect } from 'react-redux';

class Checkout extends Component {

    continueCheckoutHandler = () =>{
       this.props.history.replace('/checkout/formulario');
    }
    cancelCheckoutHandler = () =>{
        this.props.history.replace('/');
    }
    // componentWillMount() {

    //     let ingredients = {};
    //     let totalPrice = null; 
    //     const query = new URLSearchParams(this.props.location.search);
    //     for (let param of query.entries()) {
    //         if (param[0] === 'totalPrice'){
    //              totalPrice = +param[1];
    //         }
    //         else{

    //             ingredients[param[0]]= param[1]; // yields ['start', '5']
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: totalPrice});
    // }
    render(){
        
        return (
                
            <div className={styles.Checkout}>
                <h1>¡Tu hamburguesa está lista!</h1>
                <Burger ingredients = {this.props.ings}/>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button 
                        clicked={this.cancelCheckoutHandler}
                        classType='Danger'>Cancelar</Button>
                    <Button 
                        clicked={this.continueCheckoutHandler}
                        classType='Success'>Continuar</Button>
                </div>

                <Route
                    // render = {(props) => (<CheckoutForm ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>)} 
                    component= {CheckoutForm}
                    path={this.props.match.url + '/formulario'} 
                    exact />
            </div>
            
        )
    }
}

const mapStateToProps = state =>{

    return{
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);