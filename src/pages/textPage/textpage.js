import React, { useState } from 'react';
import Sitebar from './../../components/sitebar/index';
import Headers from './../../components/header/header';
import '../main/main.scss';
import './textPage.scss';
import { useHistory } from 'react-router-dom';
import {db} from '../../server/firebase';
import { connect } from 'react-redux';
import { CloseContactModal } from '../../redux/action/youtubeAction';
import CommentsAddForm from './../../components/comentsAddform/commentsAddForm';
import Comentlist from './../../components/comments/commentsList';
const TextPage=({contact__modal,CloseContactModal})=>{

    const [descr, setdescr] = useState("");
    const [emaill, setemaill] = useState("");
    const [text, settext] = useState("");


    const [sharemodal, setsharemodal] = useState(false);
    if(sharemodal){
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "visible"
    }
   const Modalclose=(e)=>{
      
        if(e.target.className==="share_modal-overlay"||e.target.className==="share_modal-close"){
            
            setsharemodal(false)
        }
   }
   const history= useHistory();
   const gobackwithhistory=()=>{
       history.goBack();
   }

   if(contact__modal){
    document.body.style.overflow = "hidden"
}else{
    document.body.style.overflow = "visible"
}
const Modalcclose=(e)=>{
  
    if(e.target.className==="modal__overlay"||e.target.className==="overlie__close"){
        CloseContactModal();
        
        
    }
}
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

    return(
        <div className="text_wraper">
<div style={contact__modal?{display:"flex"}:{display:"none"}} onClick={(e)=>Modalcclose(e)}  className="modal__overlay">
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
            <div style={sharemodal?{display:"flex"}:{display:"none"}} onClick={(e)=> Modalclose(e)} className="share_modal-overlay">
                <div className="share_modal-body">
                    <div className="share_modal-et">
                        <a  href="https://www.instagram.com/accounts/login/?next=/explore/" rel="noreferrer" target="_blank" className="share_modal-item fa fa-facebook"> </a>
                        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="share_modal-item fa fa-instagram "> </a>
                        <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="share_modal-item fa fa-twitter"> </a>
                        <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="share_modal-item fa fa-link"> </a>
                    </div>
                </div>
                <div onClick={(e)=> Modalclose(e)} className="share_modal-close">&times;</div>
            </div>
                <Sitebar/>
            <div className="header_text">
                <Headers/>
                <div className="text_page">

                    <div className="text_container">
                        <div className="text_header">
                            <div className="header_top">
                                <div onClick={gobackwithhistory} className="top_left">вернуться назад</div>
                                <div onClick={()=>setsharemodal(true)} className="top_right ">поделиться
                                <div className="fa fa-share-alt"></div>
                                </div>
                            </div>
                            <div className="header_center">Как создавать сайты легко</div>
                            <div className="header_bottom">
                                <div className="bottom_left">21.06.2020</div>
                                <div className="bottom_right">создание сайтов</div>
                            </div>
                        </div>
                        <div className="text_description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione recusandae necessitatibus eaque explicabo a libero dicta quis officiis iure minima! Delectus similique autem excepturi est doloremque eligendi minima porro dolore?
                            Sed delectus ea ratione ut commodi dolorem omnis aliquam magnam, nobis repellat maxime, quis consectetur corrupti quaerat debitis minima odit. Harum reiciendis maiores, sequi perferendis voluptatibus ex error? Dignissimos, laborum?
                            <br/>
                            <br/>
                            Fugit culpa recusandae accusamus at dignissimos beatae molestiae vero ipsam consequuntur, obcaecati dolorum vel iusto ducimus! Modi, quae! Ipsam minima unde odio libero id reiciendis delectus dignissimos laboriosam, numquam eius?
                            Repellendus veniam harum laborum, mollitia officia earum. Facilis neque cum doloremque, nisi quasi omnis ratione repudiandae tempore sit consequuntur earum autem amet corrupti rerum accusamus ullam magni iusto harum vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis error a fuga quos cum assumenda ducimus, autem ratione, aliquid officia ex animi voluptatem quasi doloremque adipisci quidem minus? Non?
                        </div>
                        <div className="text_foto-wraper">
                             <div className="text_foto"></div>
                        </div>
                        

                        <div className="text_description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione recusandae necessitatibus eaque explicabo a libero dicta quis officiis iure minima! Delectus similique autem excepturi est doloremque eligendi minima porro dolore?
                            Sed delectus ea ratione ut commodi dolorem omnis aliquam magnam, nobis repellat maxime, quis consectetur corrupti quaerat debitis minima odit. Harum reiciendis maiores, sequi perferendis voluptatibus ex error? Dignissimos, laborum?
                            
                        </div>
                            <div className="text_links">
                                <div className="links_title">Интересно почитать</div>

                                <div className="links_top">
                                    <div className="text_link links_top-left">
                                        Lorem ipsum dolor sit amet 
                                        <div className="text_link-date">21.06.2020</div>
                                    </div>
                                    <div className="text_link links_top-right">
                                    Lorem ipsum dolor sit amet
                                        <div className="text_link-date">21.06.2020</div>

                                    </div>
                                </div>
                                <div className="links_bottom">
                                <div className="text_link links_bottom-left">
                                Lorem ipsum dolor sit amet 
                                        <div className="text_link-date">21.06.2020</div>
                                </div>
                                    <div className="text_link links_bottom-right">
                                    Lorem ipsum dolor sit amet 
                                        <div className="text_link-date">21.06.2020</div>
                                    </div>
                                </div>
                            </div>
                        <div className="coments_form-wrap">
                                Обсуждение
                            <CommentsAddForm/>

                        </div>
                        <div className="comments_wraper">
                            <div className="coment">
                                <div className="coment_header">
                                    <div className="coment_header-left"></div>
                                    <div className="coment_header-right">
                                        <div className="coment_header-rg-name">Anun Azganun</div>
                                        <div className="coment_header-rg-date">1 неделю назад</div>
                                    </div>
                                </div>
                                <div className="coment_center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus tempore dolore. Libero possimus animi suscipit aliquam at nobis quis illo voluptas beatae. Accusantium sequi, excepturi animi nam odit dignissimos?
                                </div>
                                <div className="coment_footer">
                                ответить
                                </div>
                            </div>

                            <Comentlist/>
                        </div>
                    
                    </div>
                </div>
            </div>
           

        </div>
    )
}

const mapstateToProps=(state)=>{
    return{
        
        contact__modal:state.YoutubeReducer.contact__modal
    }
}

const mapdispatchtoprops={
    
    CloseContactModal
    
}

export default connect(mapstateToProps,mapdispatchtoprops)( TextPage);