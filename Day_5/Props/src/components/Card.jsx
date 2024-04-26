
<<<<<<< HEAD
const Card=({name,age,learning})=>{
    return(
        <div>
            <h2>Name :{name}</h2>
            <h4>Age:  {age}</h4>
            <p>Learning: {learning}</p>
=======
const Card=({name,age,learning,img})=>{
    return(
        <div className="Card">
            <img src={img} alt="Girl_image"/>
            <h2>Name :{name}</h2>
            <h3>Age:  {age}</h3>
            <h4>Learning: {learning}</h4>
>>>>>>> e55ebf543f633f2c68b704ffc3db114d1ed3fb91
        </div>
    )
}
export default Card;