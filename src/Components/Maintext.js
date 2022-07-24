import React, { useState } from 'react'

const Maintext = (props) => {
    const[text,setText]=useState('');
    const onchange=(ev)=>{
        setText(ev.target.value);
    }
    const uppercase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const lowercase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const copy=()=>{
        let box=document.getElementById('box');
        box.select();
        navigator.clipboard.writeText(text);
    }
    const removespace=()=>{
        let newtext=text.replace(/\s+/g, " ");
        setText(newtext);
    }
    const clear=()=>{
        
        setText('');
    }


if(props.mode==='light'){
    document.body.style.backgroundColor='white';
    document.body.style.color='black'
}
else{
    document.body.style.backgroundColor='black';
    document.body.style.color='white'
}

    

  return (
    <div className="container">


<div class="mb-3 my-3">
  <h1>Enter Your Text Here</h1>
  <textarea class="form-control my-3" id="box" value={text} onChange={onchange} rows="7"></textarea>
  <button className="btn btn-primary ms-2" onClick={uppercase}>Convert to uppercase</button>
  <button className="btn btn-primary ms-2" onClick={lowercase}>Convert to lowercase</button>
  <button className="btn btn-primary ms-2" onClick={copy}>Copy text</button>
  <button className="btn btn-primary ms-2" onClick={removespace}>Remove Extra Spaces</button>
  <button className="btn btn-primary ms-2" onClick={clear}>Clear Text</button>
</div>
<div className="container my-1">
    <h2>Information</h2>
    <p>{text.length} Characters and {text.split(" ").length} words</p>
    <h2>Preview Text</h2>
    <p>{text==='' ? 'Enter Some-text on above box to preview here':text}</p>
</div>
    </div>
  )
}

export default Maintext