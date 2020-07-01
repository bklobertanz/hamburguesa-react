import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import styles from './Burger.module.css';
import WithClass from '../hoc/withClass';

const burger = props => {
    
  const style = {fontWeight: 'bold'};
  const ingredients = props.ingredients;
  const ingredientsQty = Object.values(props.ingredients);
  let burgerIngredients = [];
  const sumElems = (sum, next) => sum + next;

  if(ingredientsQty.reduce(sumElems) === 0)
  {
    return (<WithClass classes={styles.Burger}>
                <BurgerIngredient ingredient="bread-top"/>
                <p style={style}>Agregue uno o más ingredientes, por favor</p>
                <BurgerIngredient ingredient='bread-bottom'/>
            </WithClass>
    )
  }
  else{
 
    Object.keys(ingredients).forEach(ingName =>{
        
        if(ingredients[ingName] !== 0){

            for (let index = 0; index < ingredients[ingName]; index++) {
                
                burgerIngredients.push(<BurgerIngredient key={index+ingName} ingredient={ingName}/>);
            }
        }
    })


    return (<WithClass classes={styles.Burger}>
                <BurgerIngredient ingredient="bread-top"/>
                    {burgerIngredients}
                <BurgerIngredient ingredient="bread-bottom"/>
            </WithClass>)
  }

}
export default burger;