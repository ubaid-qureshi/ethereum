import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Drizzle, generateStore } from "drizzle";
import Lottery from "./contracts/Lottery.json";

const options = { contracts: [Lottery] };

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById("root"));