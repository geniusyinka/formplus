import React, {useContext, useEffect, useState } from 'react'
import {StateContext} from './State'
import '../index.css'
import Template from './Template';
import Sort from './Sort'
import Message from './Message'
import Search from './Search';

const Templates = (props) => {
    const {templatesData, category, filter} = useContext(StateContext);
    const [template, setTemplate] = templatesData;
    const [catValue, setCatValue] = category
    const [currentPage, setCurrentPage] = useState(1);
    const [templatesPerPage, setTemplatesPerPage] = useState(25);
    const [searchData, setSearchData] = templatesData;


    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = template.filter((data) => {
             return data.name.search(value);
         });

            setSearchData(result)
         //console.log(searchData)
    }

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

      // Logic for displaying current todos
      const indexOfLastTemplate = currentPage * templatesPerPage;
      const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
      const currentTemplate = template.slice(indexOfFirstTemplate, indexOfLastTemplate);

      //rendering paginated data
      const renderTemplates = currentTemplate.map((datas, i) => {
        return <Template name={datas.name} desc={datas.description} cat={datas.category} key={i} />;
      });


      // Logic for displaying page numbers
      console.log(Math.ceil(template.length / templatesPerPage))
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(template.length / templatesPerPage); i++) {
        pageNumbers.push(i);
      }
      
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
          >
            {number}
          </li>
        );
      });


    return (
        <div>
            <div>
                <div className="searchSort">
                    <div>
                    <Search searches={(event) =>handleSearch(event)}/>
                    </div>
                    <div>
                        <Sort/>
                    </div>
                </div>
                <Message/>

                <div className="templateHeader">
                <p >
                    {catValue} Templates</p>
                    <p>2000 Templates</p>
                </div>
                <div className="templates flex mt-10 mb-10">
                    {renderTemplates}
                </div>
                <div className="pagination">

                </div>
            </div>
        </div>
    );
};

export default Templates;