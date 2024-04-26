
import Card from "./Card"
const Home=()=>{
    let People=[
        {
            name:"Priyanka",
            age:'20',
<<<<<<< HEAD
            learning:'Mern stack Development'
=======
            learning:'Mern stack Development',
            img:'https://img.freepik.com/premium-photo/young-happy-pretty-smiling-professional-business-woman-happy-confident-positive-female-entrepreneur_630787-96.jpg',
>>>>>>> e55ebf543f633f2c68b704ffc3db114d1ed3fb91
        },
        {
            name:"Kinjal",
            age:'20',
<<<<<<< HEAD
            learning:'CA'
=======
            learning:'CA',
            img:'https://img.freepik.com/premium-photo/young-happy-pretty-smiling-professional-business-woman-happy-confident-positive-female-entrepreneur_630787-93.jpg'
>>>>>>> e55ebf543f633f2c68b704ffc3db114d1ed3fb91
        },
        {
            name:"Ayushii",
            age:'20',
<<<<<<< HEAD
            learning:'Computer Science'
        },
    ]
    return(
        <div>
=======
            learning:'Computer Science',
            img:'https://img.freepik.com/premium-photo/young-happy-pretty-smiling-professional-business-woman-happy-confident-positive-female-entrepreneur_630787-106.jpg'
        },
    ]
    return(
        <div className="Home">
>>>>>>> e55ebf543f633f2c68b704ffc3db114d1ed3fb91
            {People.map((data,index)=><Card  key={index}{...data}/>)}
        </div>
    )
}
export default Home;