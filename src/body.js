import React from "react";
import {AiOutlineSearch} from "react-icons/ai";
import soli from "./soli.jpeg";
import sony from "./sony.jpg";
import git from "./git.png";
import {AiOutlinePicture} from "react-icons/ai";
import {MdOutlineGifBox} from "react-icons/md";
import {CgPoll} from "react-icons/cg";
import {HiOutlineEmojiHappy} from "react-icons/hi";
import {GrFormSchedule} from "react-icons/gr";
import {BiMap} from "react-icons/bi";
import pic from "./er.png";

function Main(){
    const div1 ={
        backgroundColor:"white",
        width:"40%",
        height:"100vh",
        marginLeft:"25%",
        fontFamily: "arial",
        border: "2px solid red",

    }
    const div2 ={
        backgroundColor:"white",
        width:"35%",
        height:"100vh",
        borderLeft:"rgba(241,243,244,1)",
        fontFamily: "arial",
        borderLeft: "1px solid rgba(241,243,244,1) "

    }
    const overall ={
        display:"flex",
    }
    const first ={
        height:"70px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontFamily: "arial",


       
    }
    const search = {
       width:"280px",
       height:"40px",
       borderBottomRightRadius:"20px",
       borderTopRightRadius: "20px",
       backgroundColor:"rgba(241,243,244,1)",
       border:"none",
       fontSize:"16px",
       color:"rgb(85 88 89)",
       fontFamily: "arial",

       
    }

    const but ={
        height:"42px",
        borderTopLeftRadius:"20px",
        borderBottomLeftRadius:"20px",
        width:"40px",
        border: "none",
        fontSize:"20px",
        backgroundColor:"rgba(241,243,244,1)",
        color:"rgb(85 88 89)",
        marginLeft:"-44px",
        fontFamily: "arial",


    }

    const second = {
        height: "740px",
        width: "310px",
        backgroundColor:"rgba(241,243,244,1)",
        paddingLeft:"20px",
        marginLeft:"40px",
        borderRadius:"20px",
        paddingTop:"10px", 
        fontFamily: "arial",

    }

    const bee = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"start",
        alignItems:"start",
        lineHeight:"0.2px",
        height:"90px",
        marginTop:"20px",
        fontFamily: "arial",


        
    }

    const lit ={
        fontSize: "14px",
        color: "rgb(85 88 89)",
        marginBottom:"10px",
        paddingRight:"190px",
        fontFamily: "arial",



    }
    const big ={
        fontSize: "16px",
        color:"black",
        fontWeight:"bold",
        paddingTop:"2px",
        fontFamily: "arial",

    }

    const title = {
        fontSize:"18px",
        fontWeight:"bolder",
        fontFamily: "arial",

    }
    const inner = {
        display:"flex",
        justifyContent:"space-around"
    }
    const bi = {
        fontSize:"16px",
        
        color: "rgb(85 88 89)",
        fontFamily: "arial",



    }
    const last =
    {
        color:"rgb(29, 155, 240)",
        marginTop:"20px",
        fontFamily: "arial",

    }

    const details ={
        height:"350px",
        width: "310px",
        marginLeft:"40px",
        marginTop: "40px",
        backgroundColor:"rgba(241,243,244,1)",
        borderRadius:"20px",
        paddingTop: "10px",
        paddingLeft:"20px",
        marginLeft:"40px",
        fontFamily: "arial",

    }
    const fine = {
        height: "60px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"space-between",
        marginBottom:"20px",
        fontFamily: "arial",
    }
    const horizon ={
        height:"60px",
        width:"50px",
        fontFamily: "arial",

    }

    const sir ={
        width:"60px",
        borderRadius:"60%"
    }

    const box = {
        width:"80px",
        height: "34px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "24px",
        fontWeight:"bold",
        fontFamily: "arial",
        border:"none",
        marginTop: "12px",
        marginLeft:"12px"

    }

    const text = {
        lineHeight:"8px",
        fontFamily: "arial",
    }
    const low = {
        display:"flex",
        width: "230px",
        
    }

    const lamb ={
        fontSize: "18px",
        color:"black",
        fontWeight:"bold",
        fontFamily: "arial",
        

    }
    const yaw = {
        display:"flex",
        flexDirection:"column"
    }
    const route = {
        height: "50px",
        display: "flex",
    }
    const home ={
        fontFamily:"arial",
        fontSize:"20px",
        fontWeight: "bold"
    }
    const as = {
        width:"301px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        fontFamily:"arial",
        fontWeight:"bold"
    }
    const host ={
        borderRadius:"50%",
        width:"60px",
        
        
    }
    const place = {
        display:"flex",
    }
    const ad ={
        fontFamily: "arial",
        color: "rgb(85 88 89)",
        paddingLeft: "10px",
        fontSize: "20px"
        
    }

    const items = {
        fontSize:"22px",
        color:"rgb(29, 155, 240)",
        height:"40px",
        width:"200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        marginLeft: "60px"
    }

    const button ={
        width: "100px",
        borderRadius:"32px",
        height:"50px",        
        backgroundColor:"rgb(29, 155, 240)",
        color:"white",
        border:"none",
        fontWeight:"bold",
        fontSize:"16px",
    }

    const tyt = {
        display: "flex",
        justifyContent:"space-between",
        width:"600px",
        borderTop:""

    }


    return(<div style ={overall}>
        <div style ={div1}>
            <h3>Home</h3>
            <div style = {route}>
                <a style={as}>For you</a>
                <a style={as}>Following</a>
            </div>
            <div style = {place}>
                <img  style={host}src ={pic}/>
                <p style={ad}>What's happening?</p>
            </div>
            <div style={tyt}>
                <div style={items}>
                    <AiOutlinePicture/>
                    <MdOutlineGifBox/>
                    <CgPoll/>
                    <HiOutlineEmojiHappy/>
                    <GrFormSchedule/>
                    <BiMap/>

                </div>
                <button style={button}>Tweet</button>

            </div>
            
            

        </div>
        <div style = {div2}>
            <div style={first}>
                <button style = {but}><AiOutlineSearch/></button>

                <input  style={search} type="text" placeholder="Search twitter"/>
            </div>
            <div style = {second}>
                <div>
                    <h1 style = {title}>Trends for you</h1>

                </div>
                <div>
                    <a style={bee}>
                        <div style={inner}>
                            <p style = {lit} >News &#183; Trending </p>
                            <p style={bi}>&#x2026;</p>
                        </div>
                        <h3 style={big}>BREAKING NEWS</h3>
                        <p style={lit}>113K Tweets</p>

                    </a>

                    
                </div>

                <div>
                    <a style={bee}>
                        <div style={inner}>
                            <p style = {lit} >News &#183; Trending </p>
                            <p style={bi}>&#x2026;</p>
                        </div>
                        <h3 style={big}>BREAKING NEWS</h3>
                        <p style={lit}>113K Tweets</p>

                    </a>

                    
                </div>

                <div>
                    <a style={bee}>
                        <div style={inner}>
                            <p style = {lit} >News &#183; Trending </p>
                            <p style={bi}>&#x2026;</p>
                        </div>
                        <h3 style={big}>BREAKING NEWS</h3>
                        <p style={lit}>113K Tweets</p>

                    </a>

                    
                </div>

                <div>
                    <a style={bee}>
                        <div style={inner}>
                            <p style = {lit} >News &#183; Trending </p>
                            <p style={bi}>&#x2026;</p>
                        </div>
                        <h3 style={big}>BREAKING NEWS</h3>
                        <p style={lit}>113K Tweets</p>

                    </a>

                    
                </div>

                <div>
                    <a style={bee}>
                        <div style={inner}>
                            <p style = {lit} >News &#183; Trending </p>
                            <p style={bi}>&#x2026;</p>
                        </div>
                        <h3 style={big}>BREAKING NEWS</h3>
                        <p style={lit}>113K Tweets</p>

                    </a>

                    
                </div>

                <div>
                    <a style={bee}>
                        <div style={inner}>
                            <p style = {lit} >News &#183; Trending </p>
                            <p style={bi}>&#x2026;</p>
                        </div>
                        <h3 style={big}>BREAKING NEWS</h3>
                        <p style={lit}>113K Tweets</p>

                    </a>
                    <div style ={last}>
                    Show more
                    </div>

                    
                </div>
                
                
            </div>
            <div style = {details}>
                <p style={lamb}>Who to follow</p>
                
                    <div style={yaw}>
                        <div style ={fine}>
                            <div style={horizon}>
                                <img style={sir} src ={soli}/>
                            </div>
                            <div style={low}>
                            <div style={text}>
                                <p><b>Micheal Soli</b></p>
                                <p>@codeoverdose</p>
                            </div>
                            <div>
                                <button style={box}>Follow</button>
                        </div>
                                
                                </div>

                            </div>
                            <div style = {fine}>
                            <div style={horizon}>
                                <img style={sir} src ={sony}/>
                            </div>
                            <div style={low}>
                                <div style={text}>
                                    <p><b>Micheal Soli</b></p>
                                    <p>@codeoverdose</p>
                                </div>
                                <div>
                                    <button style={box}>Follow</button>
                                </div>
                             </div>
                            

                            </div>
                            <div style = {fine}>
                            <div style={horizon}>
                                <img style={sir} src ={git}/>
                            </div>
                            <div style={low}>
                                <div style={text}>
                                    <p><b>Micheal Soli</b></p>
                                    <p>@codeoverdose</p>
                                </div>
                                <div>
                                    <button style={box}>Follow</button>
                                </div>

                            </div>
                            </div>

                            <div style={last}>
                                Show more
                            </div>

                        

                        </div>
                    </div>

            </div>
            

        </div>
        

    



   );
}

export default Main;