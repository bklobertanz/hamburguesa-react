import React from 'react';
import styles from './App.module.css';
import WithClass from './hoc/withClass';
import Layout from './Layout/Layout';
import BurgerBuilder from '../container/BurgerBuilder';
import Checkout from '../container/Checkout/Checkout';
import Orders from '../container/Orders/Orders';
import {Route} from 'react-router-dom';

const App = () => {
  return (

    <WithClass classes={styles.App}>
      <Layout>
        <Route path='/' exact component={BurgerBuilder}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/orders' component={Orders}/>
      </Layout>
    </WithClass>
  );
}

export default App;
