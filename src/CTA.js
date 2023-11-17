import React from "react"


// The component below decides how the element children will be displayed in the below DIv
function CTA(props) {
    return (
       
          
            

            
  
        <div className="border">
            {props.children}
        </div>

       
    )

}

export default CTA