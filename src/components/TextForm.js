import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () =>{
       // console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
      // Handle onChange Function ----->>>>>

    const handleOnChange = (event) =>{
       // console.log("UnChange");
        setText(event.target.value) ;
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Spaces hase been Removed", "success");
    }

    // USE State like this ....
    const [text, setText] = useState('');
    //text = "new text" ; wrong way 
    //setText("New Text") ; correct way  

      return (
<>

<div className = "container" style = {{color : props.mode === 'dark'? 'white': 'black'}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
  
           <textarea className="form-control" 
           value = {text}
           style = {{backgroundColor : props.mode === 'dark'? '#042743': 'white' , color : props.mode === 'dark'? 'white': 'black' }}
           onChange = {handleOnChange}
           id="myBox" rows="8"></textarea>
        </div>

       <button className="btn btn-primary mx-2 my-2"
       onClick = {handleUpClick}
       >
           Convert to UpperCase
       </button>

       <button className="btn btn-primary mx-2 my-2"
       onClick = {handleLoClick}
       >
           Convert to LowerCase
       </button>

       <button className="btn btn-primary mx-2 my-2"
       onClick = {handleExtraSpaces}
       >
           Trim Spaces
       </button> 
</div>

<div className="container my-5" style = {{color : props.mode === 'dark'? 'white': 'black'}}>
  <h1>Your Text Summary</h1>
  <p>Your Text contains <b> {text.split(/\s+/).filter((element) => {
    return element.length !== 0
  }).length}   </b> words and <b>{text.length} </b>characters</p>
  <p>Minutes to Read <b> { 0.008 * text.split(" ").filter((element) =>{
    return element.length !== 0 
  }).length}</b>   min </p>
  <h2>Preview</h2>
  <p>{text.length > 0 ? text : "Enter in the text field to preview it here"}</p>
</div>
</>
  )
}

