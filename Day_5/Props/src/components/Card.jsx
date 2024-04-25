
const Card=({name,age,learning,img})=>{
    return(
        <div className="Card">
            <img src={img} alt="Girl_image"/>
            <h2>Name :{name}</h2>
            <h3>Age:  {age}</h3>
            <h4>Learning: {learning}</h4>
        </div>
    )
}
export default Card;