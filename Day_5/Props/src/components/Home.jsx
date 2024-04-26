
import Card from "./Card"
const Home=()=>{
    let People=[
        {
            name:"Priyanka",
            age:'20',
            learning:'Mern stack Development'
        },
        {
            name:"Kinjal",
            age:'20',
            learning:'CA'
        },
        {
            name:"Ayushii",
            age:'20',
            learning:'Computer Science'
        },
    ]
    return(
        <div>
            {People.map((data,index)=><Card  key={index}{...data}/>)}
        </div>
    )
}
export default Home;