import React, {useContext, useEffect, useState } from 'react'
import '../index.css'
import {StateContext} from './State'


function Sort(props) {
    const {templatesData, category} = useContext(StateContext);
    const [categories, setCategory] = templatesData;
    const [catValue, setCatValue] = category;

    //function to change category
    const changeCat = (e) => {
        setCatValue(e.target.value)
    }

    return (
        <div>
            <div className="sortflex pt-2 relative mx-auto text-gray-600">
                <p>Sort by:</p>
                <select 
                    className="font-medium h-full py-0 pl-3 pr-3 
                    focus:ring-0 border-none border-transparent bg-transparent text-gray-500 text-l rounded-l-lg"
                    value={catValue}
                    onChange={changeCat}>
                    <option value="All" data-label="Custom Coin">All</option>
                    <option value="Education" data-label="Custom Coin">Education</option>
                    <option value="E-Commerce" data-label="Custom Coin">E-Commerce</option>
                    <option value="Health" data-label="Custom Coin">Health</option>
                </select>

                <select 
                    className="font-medium h-full py-0 pl-3 pr-3 
                    focus:ring-0 border-none border-transparent bg-transparent text-gray-500 text-l rounded-l-lg"
                    value={catValue}
>
                    <option value="All" data-label="Custom Coin">Default</option>
                    <option value="Accending" data-label="Custom Coin">Accending</option>
                    <option value="Decending" data-label="Custom Coin">Decending</option>
                </select>

                <select 
                    className="font-medium h-full py-0 pl-3 pr-3 
                    focus:ring-0 border-none border-transparent bg-transparent text-gray-500 text-l rounded-l-lg"
                    value={catValue}
>
                    <option value="All" data-label="Custom Coin">Default</option>
                    <option value="Accending" data-label="Custom Coin">Accending</option>
                    <option value="Decending" data-label="Custom Coin">Decending</option>
                </select>

            </div>
        </div>
    );
}

export default Sort;