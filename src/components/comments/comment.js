import React, { useState } from 'react';
import { db } from '../../server/firebase';
import './coment.scss';
const Comment=({coment,username,item})=>{  
    // let style={
    //     display:"none"
    // } 

   const [value, setvalue] = useState(item);
// console.log(document.getElementById('remoove'))
const now=localStorage.getItem('username');
    const parsnow=JSON.parse(now);
   
   const onlikee=(coment)=>{
       console.log(coment)
         const getlike=localStorage.getItem(coment)
         const parset=JSON.parse(getlike)
         const data={
            descr:coment,
            username:username,
            liked:parset
         }
            setvalue(parset)       
         db.collection("usercoment").doc(`${coment}`).set(data)
         .then(function() {
             console.log("Document successfully written!");
            
         })
         .catch(function(error) {
             console.error("Error writing document: ", error);
         });

   }
    console.log(coment);
    
    return(
        <li className="text_coments-wraper">
            <div className="username">Useremail:<span> {username}</span> </div>
            <div className="coment_description">{coment}
            <div className="like_wraper">
            <button style={parsnow===username?{display:"none"}:{display:"block"}} id="remoove" onClick={()=>onlikee(coment)} className="fa fa-heart"></button>
            <span  >{value}</span>
            <div style={parsnow===username?{display:"block"}:{display:"none"}} className="likkkkkke">Like</div>
            {/* <i style={lik?{display:"block"}:{display:"none"}} className="fa fa-heart i"></i> */}
            </div>
            </div>
        </li>
    )
}
export default Comment