import React, {useContext, useEffect, useState } from 'react'
import {StateContext} from './State'
import Templates from './Templates'
import '../index.css'

function Template(props) {

    const {templatesData} = useContext(StateContext);
    const [templateo, setTemplate] = templatesData;

    return (
        <div>
            <div className="template border border-gray-400 hover:border-gray-500 mt-5 8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ">
                <h1 className="head px-4 py-2 pr-4 font-bold text-3xl">
                    {props.name}
                </h1>
                <p className="templateBody mt-5 px-4 py-2 pr-">
                    {props.desc}
                </p>
                <h1 className="templateBody mt-5 px-4 py-2 pr-">
                    {props.cat}
                </h1>
                <div className="grey-footer mt-5 pl-px appearance-none w-full block ">
                    <p className="footer-text px-4 py-2 pr-0 font-bold">
                        Use Template
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Template;