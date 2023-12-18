import React, {useState} from 'react'; 

//Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.
//State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.
//We have imported useState hook from react. Now we are using useState. Whatever you will pass inside the useState function will be reflected in the text (or frist parameter of the hook). Whenever you want to update/change/manipulate the vlue of Text you will do it by setText Function(or the second parmeter of the useState hook). All of this will take place without reloading the page. Enter Text here is the default value.

export default function TextForm(props){

    const handleESClick = () => {
        console.log("Inside Remove Extra Spaces");
        let newText  = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    const handleReplace = ()=>{
        let replace = prompt("Which word You Want To Replace?");
        let replaceWith = prompt("Replace With?");
        let newText = text.replaceAll(replace, replaceWith);
        setText(newText)
        props.showAlert("Replaced!", "success");
    }

    const handleCopyClick= () => {
        console.log("Inside handleCopyClick arrow function");
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard", "success");
    }
    const handleClearClick = () => {
        console.log("Inside handleClearClick arrow function");
        //let newText = '';
        setText("");
        console.log("The Text area has been cleared");
        props.showAlert("Text area has been cleared.", "success");
    }
    const handleLwClick =  () => {
        console.log("Inside Lower Case Arrow function");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleUpClick = () => {
        console.log("UPPERCASE button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleOnChange = (event) => {//Whenever you are listening for an event (Eg. You are listening for an onChange Event in this case). This will run the function that is passed inside onChange and it will also return the event that we were listening tot that got triggered.
        console.log(" On Change ");
        setText(event.target.value);//event.target gives you the element that triggered the event. event.target.value give you the value of the elemnt that triggered the event.(eg. an input field)
        console.log(event.target.value);
        console.log(event.target);
    }
    const [text, setText] = useState('');
    //text = "new Text";  This is the wrong way. You can not manipulate the value of text like this once you have used it in useState hook.
    //setText("newText"); This is the correct way. To change the state you can ony use the setText(or the second value of your array.
    return( 
        <>
        <div class="container" style={{color: props.mode === 'dark'?'white' : 'black'}}>
            <h1> {props.heading}</h1>
            {/* <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{props.email}</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div> */}
                <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">{props.text}</label> */}
                <label for="exampleFormControlTextarea1" className="form-label"></label>
                <textarea onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} placeholder="Enter Text Here" ></textarea>
            </div>
            <button  className="btn btn-primary mx-2 btn-success" onClick={handleUpClick}> Convert to Uppercase </button>
            <button className="btn btn-primary mx-2 btn-success" onClick={handleLwClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 btn-success" onClick={handleESClick}>Remove Extra Spaces</button>

            <button className="btn btn-primary mx-2 btn-success" onClick={handleClearClick}> Clear Text Area </button>
            <button className="btn btn-primary mx-2 btn-success" onClick= {handleCopyClick} > Copy to CLipboard </button>
            <button className="btn btn-primary mx-2 btn-success" onClick= {handleReplace} > Replace </button>

        </div> 
        <div className="container my-4 " style={{color: props.mode === 'dark'?'white' : 'black'}}>
            <h1>Your Text Summary</h1>
            {/* <p> {text.split(" ").length} words , {text.length} characters </p> */}
            <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words</p>
            <p>{text.trim().length } characters</p>
            <p> {0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it here."}</p>
        </div>
        </>
    );
}

// export default TextForm;