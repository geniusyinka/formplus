import React, {useContext, useEffect, useState } from 'react'
import {StateContext} from './State'
import '../index.css'

function Search(props) {

    const {templatesData, category, filter} = useContext(StateContext);
    const [template, setTemplate] = templatesData;
    const [searchData, setSearchData] = filter;


    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = template.filter((data) => {
             return data.title.search(value) != -1;
             
         });
         //console.log(result)
    }

    return (
        <div className="pt-2 relative mx-auto text-gray-600">
            <input 
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" 
            name="search" 
            placeholder="Search Templates"
            onChange={props.searches}/>
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">

            </button>
      </div>
    );
}

export default Search;