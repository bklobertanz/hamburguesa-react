import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import styles from './Orders.module.css';
import axios from '../../axion-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: null,
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res => {
            const objOrders = res.data; 
            let arrOrders = [];
            for(let key in objOrders){
                arrOrders.push({id: key, ...objOrders[key]});
            }
            this.setState({orders: arrOrders, loading: false})
            
        })
    }
    render(){
        
      let orders = []; 
      if(this.state.loading){
          orders = <Spinner/>
      }
      else{
          
            orders = this.state.orders.map(order => {
                return ( 
                    <Order 
                        key={order.id}
                        cliente={order.cliente.nombre} 
                        precioTotal={order.precio} 
                        ingredientes={order.ingredientes}/>
                )
            })
      }
        return (
            <div className={styles.Orders}>
                {orders}
            </div>
        )
    }
}

export default Orders;