import React,{useState} from 'react';
import Sitebar from './../../components/sitebar/sitebar';
import Headers from './../../components/header/header';
import '../profie/profile.scss';
import '../reset/reset.scss';
import './search.scss';
import { useHistory } from 'react-router-dom';
import {db} from '../../server/firebase';
import { connect } from 'react-redux';
import { CloseContactModal } from '../../redux/action/youtubeAction';

const SearchPage=({contact__modal, CloseContactModal})=>{
    const [descr, setdescr] = useState("");
    const [emaill, setemaill] = useState("");
    const [text, settext] = useState("");
    const histry =useHistory();
    
 const  pushinhistry=(e)=>{
    e.preventDefault();
        histry.push("/text")
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
        <div className="searchpost_wraper">
                

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




            <Sitebar/>
            <Headers/>
            <div className="searchpost_content">
            <h1 className="page__title">Результаты поиска “Создание сайта”</h1>

<article className="post">
    <div className="post__content">
        <h2 className="post__title">
            <div >Как писать код быстро и безболезненно?</div>
        </h2>
        <p className="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
    </div>

    <div className="post__footer">
        <ul className="post__data">
            <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
            </li>
            <li className="post__data-item">
                <div >создание сайтов</div>
            </li>
        </ul>

        <div onClick={pushinhistry} className="post__read" >перейти</div>
    </div>
</article>



<article className="post">
    <div className="post__content">
        <h2 className="post__title">
            <a href="post.html">Как писать код быстро и безболезненно?</a>
        </h2>
        <p className="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
    </div>

    <div className="post__footer">
        <ul className="post__data">
            <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
            </li>
            <li className="post__data-item">
                <div >создание сайтов</div>
            </li>
        </ul>

        <div onClick={pushinhistry} className="post__read" >перейти</div>
    </div>
</article>


<article className="post">
    <div className="post__content">
        <h2 className="post__title">
            <a href="post.html">Как писать код быстро и безболезненно?</a>
        </h2>
        <p className="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
    </div>

    <div className="post__footer">
        <ul className="post__data">
            <li className="post__data-item">
                <time dateTime="2020-06-21 19:20">21.06.2020</time>
            </li>
            <li className="post__data-item">
                <div >создание сайтов</div>
            </li>
        </ul>

        <div onClick={pushinhistry} className="post__read" >перейти</div>
    </div>
    </article>
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
export default connect(mapstateToProps,mapdispatchtoprops)( SearchPage);