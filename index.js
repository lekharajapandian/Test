import React from "react";
import ReactDOM from "react-dom/client";


function Fun(props){
    return(
        <h1>Hello{props.brand.number}{props.brand.dob}</h1>
    )
}
const shoot = (a) => console.log(a);

function Fun1(){
    const namee = "VennilaGuhan2329"
    const obj = { dob : "Feb 23", number : 79798 }
    return(
       <>
        <h1>Hello</h1>
         <Fun brand = { obj } />
         <button onClick={()=>shoot("Goal")}>Click</button>
         
    </>
    )

   
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fun1/>);
