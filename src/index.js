import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Item } from '../src/stores/Item'
import { ShoppingList } from '../src/stores/ShoppingList'

let shopinglist = new ShoppingList()
 let potatoes = new Item("Potatoes")
// let groceryList = new ShoppingList()
 shopinglist.list.push(potatoes)

// Use the prop "store" for your store
ReactDOM.render(<App store = {shopinglist} />, document.getElementById('root'));
registerServiceWorker();
