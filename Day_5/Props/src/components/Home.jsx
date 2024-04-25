
import Card from "./Card"
const Home=()=>{
    let People=[
        {
            name:"Priyanka",
            age:'20',
            learning:'Mern stack Development',
            img:'https://img.freepik.com/premium-photo/young-happy-pretty-smiling-professional-business-woman-happy-confident-positive-female-entrepreneur_630787-96.jpg',
        },
        {
            name:"Kinjal",
            age:'20',
            learning:'CA',
            img:'https://img.freepik.com/premium-photo/young-happy-pretty-smiling-professional-business-woman-happy-confident-positive-female-entrepreneur_630787-93.jpg'
        },
        {
            name:"Ayushii",
            age:'20',
            learning:'Computer Science',
            img:'https://img.freepik.com/premium-photo/young-happy-pretty-smiling-professional-business-woman-happy-confident-positive-female-entrepreneur_630787-106.jpg'
        },
    ]
    return(
        <div className="Home">
            {People.map((data,index)=><Card  key={index}{...data}/>)}
        </div>
    )
}
export default Home;