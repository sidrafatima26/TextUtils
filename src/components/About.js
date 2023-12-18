import React, {useState} from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({ color: 'black', backgroundColor: 'white' }) //First add myStyle components in alll the areas where you want the change in color to reflect as style={myStyle}. Then make a state of yor myStyle as const[myStyle, setMyStyle] = useState({color: 'The colour that you want', backgroundColor:'desired bgc'}). This i sthe initial state of your myStyle component. Now we want this state to change on clicking a button. So We add a button and create an onClick event to it and pass a function toggleStyle in it.

    const [btnText, setBtnText] = useState('Enable Dark Mode');//We create a button and change the text inside the button depending upon the mode. To achieve this functionality we create a state for the text inside the button const [btnText, setBtnText] = useState('Write the initial state of your Button Text ')

    const toggleStyle = () => { // This arrow function is invoked when you click on the Change Mode Button. It checks if the .color object of myStyle is already white (Meaning the current state is Light  mode) Then cahnge the color to black and bgc to white and update the state of the button text. The opposite happens for the else condition)
        if(myStyle.color==='white'){
            setMyStyle({color:'black', backgroundColor:'white' })
            setBtnText('Enable Dark Mode');
        }
        else{setMyStyle({ color:'white', backgroundColor:'black' })
             setBtnText('Enable Light Mode');
        }
    }

    return(
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <button onClick={toggleStyle} type="button" className="btn btn-success my-3">{btnText}</button>
        </div>
    );

}