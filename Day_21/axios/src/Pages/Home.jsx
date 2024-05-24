// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const[todo,setTodo]=useState("")
    const[data,setData]=useState([])

    // create
    const handleTodos=(e)=>{
        e.preventDefault();
        
    axios.post(`http://localhost:8000/todos`,{
        todo:todo
    })
    .then((res)=>{
        console.log(res.data)
        setTodo("")
        fetchData()
    })
    }


   
    // Read
const fetchData=()=>{
    axios.get(`http://localhost:8000/todos`)
    .then((res) => {
        console.log(res.data); 
        setData(res.data.reverse());
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}

    useEffect(()=>{
        
         fetchData()
        
    },[])
    // delete
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8000/todos/${id}`,{

        })
        .then(()=>{
            console.log("Data deleted successfully !");
            setData(data.filter((item)=>item.id!==id))
        })
    }
  return (
    <div>
        <h3>Todo List</h3>
      <form onSubmit={handleTodos}>
        <input type="text" placeholder='Enter Tasks...' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button>Submit</button>
      </form>
      <div>
        {
            data.map((value,index)=>{
                return<>
                    <div key={index}>
                    <h3>{value.id}</h3>
                    <h3>{value.todo}</h3>
                    <button onClick={()=>handleDelete(value.id)}>Delete</button>
                </div>
                </>
                
            })
        }
      </div>
   
    </div>
  )
}
