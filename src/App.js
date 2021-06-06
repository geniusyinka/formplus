import {react, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search'
import Sort from './Components/Sort';
import Message from './Components/Message';
import Templates from './Components/Templates';
import "./index.css"
import Api, { getTemplates } from './Components/Api'
import { State } from './Components/State';
import Template from './Components/Template';
import Temps from './Components/Temps';

function App() {

    return ( 
    <div>
        <State>
            <div className="container text-center sm:text-left pt-8">
                <Templates className="mt-8 mb-8"/>
            </div>
        </State>
    </div>
    );
}

export default App;