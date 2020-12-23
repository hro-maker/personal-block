import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Addnewpost}from '../../redux/action/action';
import {db}from '../../server/firebase';
const PostAddForm=({Addnewpost})=>{
    const [value, setvalue] = useState({
        descr:"",
        id:""
    });
    const id=Math.floor( Math.random()*200-3);
    const changevalue=(e)=>{
        const {value}=e.target;
        setvalue({
            descr:value,
            id:id
        })
    }
    const now=localStorage.getItem('username');
    const parsnow=JSON.parse(now);
    
  const SubmitForm=(e)=>{
    e.preventDefault();
    const Data={
        descr:value.descr,
        id:value.id,
        userr:parsnow
    }

    db.collection("posts").doc(`${value.id}`).set(Data)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
    if(value.descr.length>0){
        Addnewpost(Data)
    }
    
    setvalue({
        descr:""
    })
  }
   return(
    <div className="post__add__form" >
    <form action="post" className="form" onSubmit={(e)=>{SubmitForm(e)}} >
        <input value={value.descr}
         required 
         minLength={5} 
         maxLength={50}
        onChange={(e)=>changevalue(e)}
         placeholder="Напишите что-нибудь" 
         className="addFormInput" type="text"/>
        {/* <i className="fa fa-camera"></i> */}
        <button 
          type="submit"
           className="fa fa-paper-plane"           
           ></button>
    </form>
</div>
   )
}
const mapDispatchToProps ={
    Addnewpost
}
export default connect(null,mapDispatchToProps )( PostAddForm);
