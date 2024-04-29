


const Card=()=>{
    const eventLoop=()=>{
        console.log("Hello ,This is the first text!");
        const innerLoop=async()=>{
            await console.log("I am non-blocking code");
        }
        innerLoop();
        console.log("This is my third message.");
        setTimeout(()=>{
            console.log("Hello,i am set Timeout !");
        },2000)
    }
    eventLoop();
}
export default Card;