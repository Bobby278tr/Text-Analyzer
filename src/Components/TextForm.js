import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, updateText] = useState('');
    const [boldFont, setBoldFont] = useState(false);

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        updateText(newText)
        props.showAlert("Text is converted to Upper Case", "success")
    }
    const handleOnChange = (event) => {
        // console.log("change")
        updateText(event.target.value)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        updateText(newText);
        props.showAlert("Text is converted to Lower Case", "success")
    }

    const handleClClick = () => {
        let newText = ('')
        updateText(newText);
        props.showAlert("Text has been Cleared !", "success")
    }

    const inputElement = document.getElementById("myBox");
    const handleBoClick = () => {
        setBoldFont(!boldFont)
        props.showAlert("Text Bolded !!", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied!!", "success")
    }

    const handleSeClick = () => {
        localStorage.setItem("data", inputElement.innerHTML)
        updateText(text)
        props.showAlert("Text Saved", "success")
    }

    const handleShSaClick = () => {
        if (!localStorage.getItem("data")) {
            props.showAlert("No Data to Show", "warning")
        } else {
            updateText(localStorage.getItem("data"))
        }
    }

    const handleReSaClick = () => {
        if (!localStorage.getItem("data")) {
            props.showAlert("No Data to Remove", "warning")
        } else {
            localStorage.removeItem("data")
            updateText(text)
            props.showAlert("Data Removed", "success")
        }
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        updateText(newText.join(' '))
        props.showAlert("Removed Extra Spaces", "success")
    }
    return (
        <>
            <div className='container my-3' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ fontWeight: boldFont ? "bold" : "normal", backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white', border: '1px solid ' }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleBoClick}><b>Bold Text</b></button>
                <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleCopy}>Copy Text</button>
                <div className="btn-group mx-2 my-1">
                    <button disabled={text.length===0} className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" 
                    data-bs-toggle="dropdown" aria-expanded="false">
                        Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><button disabled={text.length===0} className="dropdown-item" onClick={handleSeClick}>Save Latest data</button></li>
                        <li><button disabled={text.length===0} className="dropdown-item" onClick={handleShSaClick}>Show Saved Data</button></li>
                        <li><button disabled={text.length===0} className="dropdown-item" onClick={handleReSaClick}>Remove Data</button></li>
                    </ul>
                </div>
                <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
            </div>

            <div className="container my-3"  style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(/\s+/).filter((ele)=> {return ele.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").filter((ele)=> {return ele.length!==0}).length}</b> Minutes To read the above text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}
