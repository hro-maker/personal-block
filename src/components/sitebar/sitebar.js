import React from 'react';
import './sitebar.scss';
import foto from './foto.jpg';
import top from './top.png';
import { connect } from 'react-redux';
import {OpenContactModal, OpenShareModal} from '../../redux/action/youtubeAction';
const Sitebar =({OpenContactModal,OpenShareModal})=>{
    return(
        <article className="sitebar">
           
           <div className="sidebar__wraper">
            <div className="sitebar__topp">
            <img className="sitebar__top" src={top} alt="g"/>
            </div>
            
            <div className="sitebar__wraper-secnt">
            <div className="sitebar__center">
               
               <div className="sitebar__center-foto">
                   <img className="foto" src={foto} alt="g"/>
               </div>
               
               <div className="sitebar__center-descr">
                   <div className="sitebar__title">Hrant Muradyan</div>
                   <div className="sitebar__descr">блог front-end разработчика</div>
               </div>
   
               <div className="sitebar__center-social">
                   
                   <a className="social social_pinnterest" target="/blank" href="https://www.instagram.com/hrant.muradyan_/">
                   <i className="fa fa-instagram"></i>
                           
                           </a>
                   <a className="social social_pinnterest" target="/blank" href="https://www.facebook.com/hrant.muratyan">
                   <i className="fa fa-facebook"></i>
                           
                           </a>
                        <a className=" social social_pinnterest" target="/blank" href="https://www.instagram.com/hrant.muradyan_/">
                        <i className="fa fa-pinterest"></i>
                           
                           </a>   
                          
                           
                         
                           
               
               
               </div>
               </div>
              <div className="line"></div>
               
               <div className="sitebar__bottom">
                   <div className="title_top">Front-end разработчик. <br/> Практик верстки сайтов.</div>
                    <div className="title_bottom">Созданием сайтов занимаюсь с 2020 года. </div>
               </div>
               <div className="line"></div>
               <div className="sitebar__footer">
               <button onClick={OpenShareModal} type="submit" className="buttonn buttonn_red ">Мои работы</button>
               <button onClick={OpenContactModal} type="submit" className="buttonn buttonn_blue">Написать мне</button>
   
   
               </div>
            </div>
            </div>
        </article>
       
    )
}

const mapdispatchtoprops={
    OpenContactModal,
    OpenShareModal
}

export default connect(null,mapdispatchtoprops)( Sitebar);
