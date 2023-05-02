import React from "react";
import {BsTwitter} from "react-icons/bs";
import {BiHomeCircle} from "react-icons/bi";
import {BiHash} from "react-icons/bi";
import {RiNotification2Line} from "react-icons/ri";
import {RxEnvelopeClosed} from "react-icons/rx";
import {RiFileListLine} from "react-icons/ri";
import {HiOutlineUser} from "react-icons/hi";
import {CiCircleMore} from "react-icons/ci";
import pic from "./er.png"



function Sidebar(){
    const style1 = {
        position: "fixed",
        width:"25%",
        bottom:"0",
        top: "0",
        borderRight:"0.2px solid gray"        
    }
    const icon = {
        display:"flex",
        flexDirection:"column",
        
        height:"600px",
        justifyContent:"space-between",
        marginTop:"0px",
        fontSize: "20px",
        fontFamily: "arial",
        marginLeft:"90px",
        
    }
    const button ={
        width: "240px",
        borderRadius:"30px",
        height:"50px",        
        backgroundColor:"rgb(29, 155, 240)",
        color:"white",
        border:"none",
        fontWeight:"bold",
        fontSize:"16px",
    }
    const sp = {
        paddingRight:"16px",
        fontSize:"26px",
    }
    const twi ={
        color:"rgb(29, 155, 240)",
        fontSize:"30px",
    }
    const lower = {
        height:"60px",
        display:"flex",
        textAlign:"baseline",
        marginLeft:"120px",
        width:"250px",
        marginTop:"60px", 
    }
    
    const sub = {
        display:"flex",
        flexDirection: "column",
    }
    const below={
        borderRadius:"50%",  
    }
    const hmm = {
        lineHeight:"2px",
        paddingLeft:"10px",
        fontFamily:"arial",
        fontSize:"18px"
        
    }
    const m = {
        color: "gray",
    }
    

    return(
        <div style= {style1}>
            
            <ul style={icon}>
                <a><span style ={twi}><BsTwitter/></span></a>
                <a><span style ={sp} ><BiHomeCircle/></span> Home</a>
                <a><span style ={sp}><BiHash/></span> Explore</a>
                <a><span style ={sp}><RiNotification2Line/> </span> Notifications</a>
                <a><span style ={sp}><RxEnvelopeClosed/> </span> Message</a>
                <a><span style ={sp}><RiFileListLine/> </span> Lists</a>
                <a><span style ={sp}><HiOutlineUser/> </span> Profile</a>
                <a><span style ={sp}><CiCircleMore/> </span>More</a>
                <button style={button}>Tweet</button>

            </ul>
            <div style = {lower}>
                <img  style={below}src ={pic}/>
                
                
                <div style={hmm}>
                    <p><b>Erica Kyei Annor</b></p>
                    <p style={m}>@ericaannorkyei &#x2026;</p>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar;