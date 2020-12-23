import React, { useState } from 'react';
import Headers from '../../components/header/header';
import PostList from '../../components/postlist/postlist';
import Sitebar from '../../components/sitebar';
import './main.scss';
import PostAddForm from './../../components/postAddForm/PostAddForm';
import MainBody from './mainbody';
import Example from './youtube';
import {AddyoutubePlayer,RemoveyoutubePlayer,CloseContactModal} from '../../redux/action/youtubeAction';
import { connect } from 'react-redux';
import Highlighter from "react-highlight-words";
import {db} from '../../server/firebase';
import Loader from '../../components/loader/loader';
 const Mainpage =({AddyoutubePlayer,display,RemoveyoutubePlayer,contact__modal,CloseContactModal, loading,share_modal})=>{
   const [descr, setdescr] = useState("");
   const [emaill, setemaill] = useState("");
   const [text, settext] = useState("");
    const state=[ {
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque explicabo perferendis esse amet fugiat totam autem voluptas, asperiores laborum. Obcaecati magnam error voluptatibus, excepturi debitis molestias culpa minima nulla nisi?",
        id:"0.5555555",
        userr:"hrant.muradyan.1998@mail.rud"
    }];
    if(display || contact__modal||share_modal){
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "visible"
    }
   const Modalclose=(e)=>{
        if(e.target.className==="modal__overlay"||e.target.className==="overlie__close"||e.target.className==="share_modal-close"||e.target.className==="share_modal-overlay"){
            CloseContactModal();
            RemoveyoutubePlayer();
        }
   }
  const [forsearch, setforsearch]=useState("");
  const SubmitForm=(e)=>{
    e.preventDefault();
    const Data={
                name:descr,
                email:emaill,
                description:text
            }
    db.collection("coment").doc(`${emaill}`).set(Data)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    setdescr("");
    setemaill("");
    settext("");
  }
  if(loading){
      return(
          <Loader/>
      )
  }
    return(
 <div  className="hello">
<div style={contact__modal?{display:"flex"}:{display:"none"}} onClick={(e)=>Modalclose(e)}  className="modal__overlay">
    <div className="modal__body contact_modal-b">
        <div className="black__modal-body">
            <form onSubmit={(e)=>SubmitForm(e)} action="post" className="modal_form" >
                <input
                 required 
                 type="text"
                 value={descr}
                 onChange={(e)=>setdescr(e.target.value)}
                 placeholder="name surename"
                 className="modal__input"/>
                <input
                 value={emaill}
                 onChange={(e)=>setemaill(e.target.value)}

                required type="email" placeholder="e-mail" className="modal__input"/>
                <input 
                 value={text}
                 onChange={(e)=>settext(e.target.value)}
                
                required placeholder="text" className="modal__input" type="text"/>
                <button className="buttonn buttonn_blue button_mini" type="submit">Отправить</button>
                <div className="modal__contact">
                    <label className="modal__mail"  htmlFor="modal_email">e-mail: </label>
                    <a href="email:info@mywebsite.ru"   id="modal_email" className="modal__mail">info@mywebsite.ru</a>
                    <label  className="modal__tel"  htmlFor="modal_phone">тел:</label>
                    <a href="tel:+94323285622"id="modal_phone"  className="modal__tel">+943-232-856-22</a>
                </div>
            </form>
        </div>
    </div>
    <div onClick={CloseContactModal}  className="overlie__close modal_close">&times;</div>
</div>
<div style={share_modal?{display:"flex"}:{display:"none"}} onClick={(e)=>Modalclose(e)} className="share_modal-overlay">
                <div className="share_modal-body ">
                    <div className="share_modal-et">
                        <a 
                        href="https://hro-maker.github.io/kartinki/" 
                        rel="noreferrer"
                         target="_blank"
                          className="share_modal-item fa fa-image"> 
                          </a>
                        <a 
                        href="https://hro-maker.github.io/pulsomer/"
                         rel="noreferrer" target="_blank" 
                         className="share_modal-item fa fa-link "> </a>
                        <a href="https://hro-maker.github.io/yoga/" 
                        rel="noreferrer" 
                        target="_blank"
                         className="share_modal-item fa fa-camera-retro"> </a>
                        <a href="https://hro-makerrr.web.app/"
                         rel="noreferrer"
                          target="_blank" 
                          className="share_modal-item fa fa-link"> </a>
                    </div>
                </div>
                <div onClick={(e)=>Modalclose(e)} className="share_modal-close">&times;</div>
            </div>
<div style={display?{display:"flex"}:{display:"none"}} onClick={(e)=>Modalclose(e)} className="modal__overlay">
        <div className="modal__body">
            <div className="youtube_wraper">
                    < Example className="youtubee"/>
            </div>
            
        </div>
        <div onClick={(e)=>Modalclose(e)} className="overlie__close">&times;</div>
      </div>
            <div>
            <Headers/>
            </div>
            
            <div>
                     <Sitebar/>
            <div className="hellow">
                <input 
                className="input_mini"
                placeholder="search in the page"
                value={forsearch}
                onChange={(e)=>setforsearch(e.target.value)}
                type="text"/>
            <div className="container">
            <div  className="storis">
                   <div onClick={()=>AddyoutubePlayer("F8TwaCFkQzg")} className="storis__item-wraper">
                   <div className="storis__item after-540 storis__item_1">
                       <div className="storis__item-top">
                       <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ='Lorem ipsum dolor sit amet.'
                />
                           </div>
                       <div className="storis__item-bottom">15.09.2020</div>
                   </div>
                   </div>

                   <div onClick={()=>AddyoutubePlayer("nJHPuwrjQUw")} className="storis__item-wraper">
                   <div className="storis__item storis__item_2">
                       <div className="storis__item-top">
                       <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ='Lorem ipsum dolor sit amet.'
                />
                       </div>
                       <div className="storis__item-bottom">15.09.2020</div>
                   </div>
                   </div>
                   <div onClick={()=>AddyoutubePlayer("9jxjkk6VBBM")} className="storis__item-wraper">
                   <div className="storis__item  storis__item_3">
                       <div className="storis__item-top">
                       <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ='Lorem ipsum dolor sit amet.'
                    />
                           .</div>
                       <div className="storis__item-bottom">15.09.2020</div>
                   </div>
                   </div>
                   <div  onClick={()=>AddyoutubePlayer("5TSd_QaKSZE")} className="storis__item-wraper">
                   <div className="storis__item storis__item_4">
                       <div className="storis__item-top">
                       <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ='Lorem ipsum dolor sit amet.'
                />
                       </div>
                       <div className="storis__item-bottom">15.09.2020</div>
                   </div>
                   </div>
                   
               </div>
                    <PostAddForm/>
                    <PostList forsearch={forsearch} state={state}/>
                    <MainBody forsearch={forsearch}/>
            </div>
            </div>
            </div>
        </div>
    )
}
const mapstateToProps=(state)=>{
    return{
        display:state.YoutubeReducer.display,
        contact__modal:state.YoutubeReducer.contact__modal,
        loading:state.AuthReducer.loading,
        share_modal:state.YoutubeReducer.share_modal
    }
}
const mapdispatchtoprops={
    AddyoutubePlayer:AddyoutubePlayer,
    RemoveyoutubePlayer,
    CloseContactModal
    
}
export default connect(mapstateToProps,mapdispatchtoprops)( Mainpage);
