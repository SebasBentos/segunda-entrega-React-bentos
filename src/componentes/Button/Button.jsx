import"./Button.css";
import React from "react";



export default function Button(props){
    
    let [colorState, setBackgroundColor]= React.useState("purple");
  

    let styleButton = {
        padding: props.padding,
        backgroundColor: colorState,
    };
    
    function handleClick(evt){
       
     
        setBackgroundColor("red");
    }
    return (<button onClick={handleClick} style={styleButton} className="btn">{props.text}</button>);
}
