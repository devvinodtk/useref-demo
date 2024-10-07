import React, { forwardRef } from "react";

const Circle = forwardRef((props, ref) => {

    return(
        <div style={{
            position:"absolute",
            border:"1px solid red",  
            height:"40px", 
            width: "40px", 
            backgroundColor:"red",
            borderRadius:"50%",
            /*transitionTimingFunction:"linear",
            transition:"width 5s"*/
            }}
            
            ref={ref}>
        </div>
    )
})

export default Circle;