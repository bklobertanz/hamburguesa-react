import React, { useState, useEffect } from 'react';
import styles from './BurgerBuilder.module.css';
import WithClass from '../components/hoc/withClass';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import Spinner from '../components/UI/Spinner/Spinner';
import axios from '../axion-orders';

import { connect } from 'react-redux';
import * as burgerBuilderActions from '../store/actions/burgerBuilder';

const BurgerBuilder = props =>{
   
    const [burgerState, setBurgerState] = useState({ 

        purchaseBurger:false,
        showOrderSummary: false,
        loading: false
    });

    // useEffect(()=>{
    //     // axios.get('/ingredients.json')
    //     // .then(response => {
    //     //     setBurgerState({...burgerState,ingredients:response.data});
    //     // })
    //     // .catch(error => console.log(error));
    // },[])

    const updatePurchaseBurgerState = (ingredients) =>{

        const ingredientsQty = Object.values(ingredients).reduce((sum,nextEl) => sum + nextEl);

        return ingredientsQty > 0;
    }
    
    const boolIngredients = {...props.ings};
    Object.keys(boolIngredients).forEach(ingredient =>{
        boolIngredients[ingredient] = boolIngredients[ingredient] === 0;
    })

    const showModalHandler = () =>{
        const prevBurgerState = {...burgerState}
        setBurgerState({...prevBurgerState, showOrderSummary: true})
    }
    const cancelOrderHandler = () =>{
        const prevBurgerState = {...burgerState};
        setBurgerState({...prevBurgerState, showOrderSummary:false});
    }
    const continueOrderHandler = () => props.history.push('/checkout');
    
    let burger = <Spinner/>
    let orderSummary = null;
    if(burgerState.loading){
        orderSummary = <Spinner />
    }
    if(props.ings){
         burger = <Burger ingredients = { props.ings }/>
         orderSummary = <OrderSummary 
                            ingredients = {props.ings}
                            price = {props.price}
                            cancelOrder={cancelOrderHandler}
                            continueOrder={continueOrderHandler}
                        />
    }
    

    return (
        <WithClass classes={styles.BurgerBuilder}>
            <Modal 
                showModalBool={burgerState.showOrderSummary}
                
            >
                {orderSummary}
                
            </Modal>
            {burger}
            <BuildControls 
                price = {props.price}
                addedIngredient = {props.onAddIngredient}
                removedIngredient = {props.onRemoveIngredient}
                purchaseBurger = {updatePurchaseBurgerState(props.ings)}
                boolIngredients = {boolIngredients}
                modalHandler = {showModalHandler}
            />
        </WithClass>
    );
}

const mapStateToProps = state =>{

    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch =>{

    return {
        onAddIngredient: (name) => dispatch(burgerBuilderActions.addIngredient(name)),
        onRemoveIngredient: (name) => dispatch(burgerBuilderActions.removeIngredient(name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
