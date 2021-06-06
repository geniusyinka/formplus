import React, { useEffect, useState, createContext } from 'react'
import { getTemplates } from './Api';

export const StateContext = createContext();

export const State = props => {
    const [templates, setTemplates] = useState([]); //getting templates
    const [categoryValue, setCategoryValue] = useState('All');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getTemplates()
        .then(data => {
            setTemplates(data);
            setFilteredData(data);
            //console.log(filteredData);


            //console.log(data);
        })
        .catch(error => {
            console.log('Error getting data: ' + error);
            })  
    },[])

    return (
            <StateContext.Provider 
                value={{ 
                    templatesData: [templates, setTemplates],
                    category:[categoryValue, setCategoryValue],
                    filter: [filteredData, setFilteredData],
                }}>
                {props.children}
            </StateContext.Provider>
        
    )
}