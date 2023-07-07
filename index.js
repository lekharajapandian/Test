import React from "react";
import ReactDOM from "react-dom/client";


function Fun(props){
    return(
        <h1>Hello{props.brand.number}{props.brand.dob}</h1>
    )
}
const shoot = (a) => console.log(a);


function Fun1(){
    const namee = "VennilaGuhan23245359"
    const obj = { dob : "Feb 23", number : 797982323 }
    return(
       <>
        <h1>Hello</h1>
        <h1>Hello jgkkhj</h1>
        <h1>Helloooooooooooo</h1>
         <Fun brand = { obj } />
         <button onClick={()=>shoot("Goal")}>Click</button>
         
    </>
    )

   
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fun1/>);
