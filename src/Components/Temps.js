import React, {useContext, useEffect, useState } from 'react'
import {StateContext} from './State'
import '../index.css'
import Template from './Template';


const Temps = () => {
    const {templatesData} = useContext(StateContext);
    const [templateo, setTemplate] = templatesData;
    const [todos, setTodos] = templatesData
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage, setTodosPerPage] = useState(10);



    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      console.log (indexOfLastTodo);
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
      
      
      console.log(indexOfFirstTodo)
      //console.log(currentTodos)
      console.log(todos)

      const renderTodos = currentTodos.map((todo, i) => {
        return <Template name={todo.name} desc={todo.description} key={i} />;
      });

      // Logic for displaying page numbers
      console.log(Math.ceil(todos.length / todosPerPage))
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
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

            {renderTodos}

          {/* <ul id="page-numbers">
            {renderPageNumbers}
          </ul> */}

                        
                             {/*    {templateo.map((templateo, i) => (
            <Template name={templateo.name} desc={templateo.description} key={i} />
                ))} */}

{/* 
                    <Template name={'yinka'} desc={'omo'}/>                    
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>                    
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>                    
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>                    
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/>
                    <Template name={'yinka'} desc={'omo'}/> */}

        </div>
      );
    }


  export default Temps;