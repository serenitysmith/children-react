import React from "react";
import CTA from "./CTA";
import "./App.css";

function App() {
  return (
    <div>
      {/* // if we want navbar to have reusability we have to add props
          like below  */}
      {/* <Navbar backgroundColor="firebrick" />
            <Button backgroundColor="blue" text="Click me!"/> */}

      {/* 
            sometimes we just want one component  to wrap some other element as a generic box, like we my want the elemnts to look a like but have different inputs and actions etc */}

      {/* Ie this call to action funtion below,  */}

      {/* // at this point our call to action isnt very reusable, will act the same acroos the app, thats where children come in so the can act differnt but still be assioated with CTA */}

      {/* to make children of CTA we will get rid of the self closing tag and make two tags and add a props component n the CTA .js file and another called props .children in the div   now we can acess them seperately but style them the same. */}

      {/* 
            self closing below  */}
      {/* <CTA /> */}
      {/* 
open below */}
      {/* <CTA > */}
      {/* children h1 and button */}
      {/* // // now everythign we add in here will be styled the same but can be told to do different things  */}

      <CTA>
        <h1>This is an important CTA</h1>
        <button>Click me now or you'll miss out!</button>
      </CTA>

      <CTA>
        <form>
          <input type="email" placeholder="Enter email address here" />
          <br />
          <button>Submit</button>
        </form>
      </CTA>
    </div>
  );
}

export default App;
//ol and ul in HTML consits of paremnts and whats inside is children
