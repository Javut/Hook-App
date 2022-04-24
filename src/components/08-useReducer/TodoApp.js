import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{   // Este seria mi estado inicial 
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => { //La funcion init se llama y lo que sea que retorne viene a ser el initialState

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init); //(todoReducer) es mi action !!  -- La funcion initi es la que va a ayudar a react para que el initialState no se este ejecuntando todo el tiempo


    useEffect(() => {  //El useEffect se va a encargar de grabar cualquier cambio que ocurra en los todos
        localStorage.setItem('todos', JSON.stringify(todos))  //El localStorage solo guarda String 
        //Se emplea el metodo JSON.stringify para convertir mi JSON a un String !!
    }, [todos])  //Si los (Todos) Cambian quiere decir que debo volver a grabar en el LocalStorage

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>
                </div>

                <div className="col-5">
                   <TodoAdd
                     handleAddTodo = {handleAddTodo}
                   />
                </div>


            </div>

        </div>
    )
}
