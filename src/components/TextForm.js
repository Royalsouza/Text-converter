import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into uppercase!","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase!","success");
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text );
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared!","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = ()=> {
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to Clipboard!","success");
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extraa spaces Removed!","success");
    }
    const [text, setText] = useState(' ');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container"style ={{color:props.mode===`dark`?`white`:`black`}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode===`dark`?`#a39595`:`white`,color:props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-success mx-3 my-2" onClick={handleUpClick}> Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-3  my-2" onClick={handleLoClick}> Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-3  my-2" onClick={handleCopy}> Copytext</button>
  <button disabled={text.length===0} className="btn btn-secondary mx-3  my-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
  <button disabled={text.length===0} className="btn btn-danger mx-3  my-2" onClick={handleClearClick}> Clear the text</button>
  </div>

  <div className="container my-3" style ={{color:props.mode===`dark`?`white`:`black`}}>
   <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
  </div>
  </>
  )
}