import { useEffect, useState } from "react";

const Home=()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[user,setUser]=useState([]);
    const[search,setSearch]=useState("");
    const[edit,setEdit]=useState(null);

    // create
    const data={
        name,
        email,
        password,
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(" http://localhost:8001/users",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        alert("userData added successfully!")
        setName("")
        setEmail("")
        setPassword("")
    }
    useEffect(()=>{
        fetch(`http://localhost:8001/users?q=${search}`)
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data);
        })
    },[search])
    const handleAssending=()=>{
        const setData=user.sort((a,b)=>a.price-b.price);
        setUser([...user] ,setData)
    }
    const handleDescending=()=>{
        const setData=user.sort((a,b)=>b.price-a.price)
        setUser([...user] ,setData)
    }
    const handleDelete=(id)=>{
        const deleteData=user.filter((item)=>item.id!=id)
        setUser(deleteData)

        fetch(`http://localhost:8001/users/${id}`,{
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            alert("data deleted successfully!")
        })
    }
    const handleEdit=(id)=>{
        const editData=user.find((item)=>item.id===id)
        setEdit(editData)
    }
    const handleUpdate = () => {
        fetch(`http://localhost:8001/users/${edit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(edit) // Sending the whole edit object
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.location.reload();
        })
        .catch(error => console.error('Error', error));
    }
    
    console.log("edit ",edit);
        return(
            <div>
                <div>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Search here.."/>
                </div>
                <div>
                    <button onClick={handleAssending}>Assending</button>
                    <button onClick={handleDescending}>Descending</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>   
                    <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Name"/>
                    </div>
                    <div>
                    <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email"/>
                    </div>
                    <div>
                    <input type="text" name="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password"/>
                    </div>
                    <input type="submit" />
                </form>
                <div style={{display:"flex"}}>
                    <div>
                    {user.map((value,index)=>{
                           return (
                            <div key={index}>
                                <img src={value.thumbnail} alt="" width="300px"/>
                                <h2>{value.id}</h2>
                                <h2>{value.title}  { edit && edit.id ===value.id && <div>
                        <input type="text" placeholder="Edit title here..." value={edit.title.id} onChange={(e)=>setEdit({...edit,title:e.target.value})}/>
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                    }</h2>
                                <h4>{value.price}</h4>
                                <h4>{value.stock}</h4>
                                <h4>{value.brand}</h4>
                                <h4>{value.category}</h4>
                                <button onClick={()=>{handleDelete(value.id)}}>Delete</button>
                                <button onClick={()=>{handleEdit(value.id)}}>Edit</button>
                            </div>
                           )
                    })}
                    </div>
                 
                </div>
            </div>
        )
}
export default Home;