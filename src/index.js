import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from "./App";
import itemStorage from './item-storage';

let paragraph = <p>hello react</p>;

const root = createRoot(document.getElementById('root'));
root.render(<App 
                todoItems={itemStorage.getItems()}
                onSaveItems={itemStorage.saveItems}/>);