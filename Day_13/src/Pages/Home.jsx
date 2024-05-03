import { useEffect, useState } from "react";



const Home = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");



    // create
    const data = {
        username,
        email,
        password,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/users', {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert('Data inserted successfully!')
                setUserName(" ")
                setEmail(" ")
                setPassword(" ")
            })
    }
    // Read
    useEffect(() => {
        fetch(`http://localhost:8000/users?q=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            })
    }, [search])

    const handleDesc = () => {
        const setData = user.sort((a, b) => b.price - a.price)
        setUser([...user], setData)
    }
    const handleAsec = () => {
        const setData = user.sort((a, b) => a.price - b.price)
        setUser([...user], setData)
    }
    return (

        <div>
            <div>
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Here" />

                <button onClick={handleDesc}>Ascending</button>
                <button onClick={handleAsec}>Descending</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => { setUserName(e.target.value) }} value={username} placeholder="Enter your name" /><br /><br />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Enter your email" /><br /><br />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Enter your password" /><br /><br />
                <input type="submit" />
            </form>

            <div>

                {user.map((value, index) => {
                    return <div key={index}>
                        <h2>{value.id}</h2>
                        <img src={value.thumbnail} alt="" />
                        <h2>{value.title}</h2>
                        <h3>{value.price}</h3>
                        <h4>{value.category}</h4>
                        <h4>{value.brand}</h4>
                    </div>

                })}

            </div>
        </div>
    )
}
export default Home;