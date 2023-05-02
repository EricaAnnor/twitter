import React from "react";

function Right(){

    const div2 ={
        backgroundColor:"blue",
        width:"30%",
        height:"100vh",
        display:"flex",
    }

    const first ={
        border:"2px solid red",
        height:"70px"
    }


    return(
        <div style = {div2}>
            <div style={first}>
                <input type="text" placholder="Search twitter"/>
            </div>
            <div>

            </div>

        </div>
    );
}

export default Right;