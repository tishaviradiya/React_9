import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [inputTodo, setInputTodo] = useState("");
    const initialState = { todos: [] };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case "TODO_POST":
                return { ...state, todos: [...state.todos, payload] };
            
            case "GET_TODO":
                return { ...state, todos: payload };

            case "TODO_DELETE":
                return {...state, todos: state.todos.filter((item) => item.id !== payload)};
            
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create
        axios.post('http://localhost:8001/todos', {
           todo: inputTodo,
        })
        .then((res) => {
            dispatch({ type: 'TODO_POST', payload: res.data });
            setInputTodo(""); // Clear input after adding todo
        })
        .catch((error) => {
            console.log(error, 'error');
        });
    };

    // Read
    useEffect(() => {
        axios.get(`http://localhost:8001/todos`)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: "GET_TODO", payload: res.data });
        })
        .catch((error) => {
            console.log(error, 'error');
        });
    }, []);

    // Delete
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8001/todos/${id}`)
        .then((res) => {
            dispatch({ type: "TODO_DELETE", payload: id });
        })
        .catch((error) => {
            console.log(error, 'error');
        });
    };

    return (
        <div>
            <h2>Todo App with useReducer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Todo' value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
            <div>
                {state.todos.map((item, index) => (
                    <div key={index}>
                        <h3>{item.todo}</h3>
                        <h3>{item.id}</h3>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
