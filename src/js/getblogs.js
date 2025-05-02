import { makehtml } from "./makehtml";

async function getblogs(params){
try {
    const blog = await fetch("http://localhost:3000/blogs");
    
    const data = await blog.json();
    console.log(makehtml(data));
} catch (error) {
    
}
}
getblogs();
