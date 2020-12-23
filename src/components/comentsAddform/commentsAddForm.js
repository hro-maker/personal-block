import React, { useState } from 'react';
import '../../pages/textPage/textPage.scss';
import './formstyle.scss';
import '../../pages/main/main.scss';
import { AddNewComent } from '../../redux/action/comentaction';
import { connect } from 'react-redux';
import { db } from '../../server/firebase';
// import fireaxios from '../../server/fireaxios';

const CommentsAddForm =({AddNewComent})=>{
    const id=Math.floor(Math.random()*500);
    const username= localStorage.getItem('username');
    const parsed= JSON.parse(username);
   const [invalue,setinvalue]=useState("")
   const num=0;
       const SubmitForm=(e)=>{
        e.preventDefault();
        const Data={
            descr:invalue,
            username:parsed,
            liked:num,
            id:id
        }
        db.collection("usercoment").doc(`${invalue}`).set(Data)
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        AddNewComent(Data)
        setinvalue("")
    }

    return(
        <div className="hello">
           <form onSubmit={SubmitForm} action="post" className="coments_form">
             <input required minLength={10} autoFocus value={invalue} 
             onChange={(e)=>setinvalue(e.target.value)}
             placeholder="Текст комментария" 
             type="text"
             className="coment_input"/>
            <button className="btn text_btn" type="submit">Отправить</button>
        </form>
        </div>
    )
}

const mapdispachToProps={
    AddNewComent
}
export default connect(null,mapdispachToProps)( CommentsAddForm);