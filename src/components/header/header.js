import React,{useState} from 'react';
import {useHistory}from 'react-router-dom';
import './header.scss';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { LoginFaild } from '../../redux/action/auth';

function Headers ({login,LoginFaild}){
   
   const [fordisp, setfordisp] = useState(false);
   const [forburg, setforburg] = useState(true);
   const [forsearch, setforsearch] = useState("");
const burger=["meniu__icon"];
const burgerr=["meniu__icon active"];
const histry=useHistory();
const pushinhistrywithinput=(e)=>{
    e.preventDefault();
    histry.push(`/${forsearch}`)
}

    return(
      
        <div className="header">
           
             <div style={ forburg?{transform: `translateX(${-200}px)`}:{transform: `translateX(${200}px)`}} className="secntMenu">
                 <ul className="secntmenu_list">
                       
                        <li className="nav__list-item">
                        <Link  to={login?"/":"/"}>
                        <div className="nav__link" >Главная </div>
                        </Link>
                           
                            
                       </li>
                       
                       <li className="nav__list-item">
                       <Link  to={login?"/search":"/"}>
                       <div className="nav__link" >Создание сайтов</div>
                       </Link>
                       </li>
                       <li className="nav__list-item">
                       <Link  to={login?"/users":"/"}>
                       <div className="nav__link" >пользователи сайта</div>
                       </Link>
                       </li>
                       <li className="nav__list-item">
                           
                             <Link to="/profile">
                            <div  style={login?{display:"none"}:{display:"block"}} className="nav__link end" >регистрация</div>
                            </Link>
                            <Link to="/">
                            <button onClick={LoginFaild}  style={!login?{display:"none"}:{display:"block"}} className="nav__link end btn btn-danger burger_btn " >выйти</button>
                            </Link> 
                       
                       </li>
                 </ul>
             </div>

            <div className={forburg?burger:burgerr}
            onClick={()=>setforburg(!forburg)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__left">
                <nav className="header__left-l">
                    <ul className="nav__list">
                       <li className="nav__list-item">
                       <Link  to={login?"/":"/"}>
                           <div className="nav__link" >Главная</div>
                       </Link>
                       </li>
                        <li onMouseEnter={()=>setfordisp(true)} 
                        onMouseLeave={()=>setfordisp(false)} 
                        style={fordisp?{backgroundColor:"#3137c9" }:{backgroundColor:"#0d0d0d"}}
                         className="nav__list-item for-hover for__subnav">
                        <div className="nav__link" >Статьи</div>
                             </li>
                        {/* <li className="nav__list-item">
                             <div className="nav__link" > Обо мне </div>
                        </li> */}
                    </ul>
                </nav>
                <div style={fordisp?{display:"block"}:{display:"none"}} 
                 onMouseEnter={()=>setfordisp(true)} 
                  onMouseLeave={()=>setfordisp(false)} className="subnav">
                    <div  className="nav_bottom">
                        <ul  className="subnav_list">
                            <li className="subnav_list-item">

                            <Link  to={login?"/search":"/"}>
                            
                                <div className="nav__link sub " >Создание сайтов</div>
                                </Link>
                            </li>
                            <li className="subnav_list-item">
                            <Link  to={login?"/users":"/"}>  
                          
                            <div className="nav__link sub" >  пользователи сайта   </div>
                            </Link>
                           
                            </li>
                            {/* <li className="subnav_list-item">
                           
                            <div className="nav__link sub" >Продвижение видео</div>
                            </li> */}
                        </ul>
                    </div>
                </div>
                
                <div className="header__left-r">
                <ul className="nav__list nav__list-end">
                        <li className="nav__list-item">
                            <Link to="/profile">
                            <div  style={login?{display:"none"}:{display:"block"}} className="nav__link end" >регистрация</div>
                            </Link>
                            <Link to="/">
                            <button onClick={LoginFaild}  style={!login?{display:"none"}:{display:"block"}} className="nav__link end btn btn-danger " >выйти</button>
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header__right">
                <form className="after_900" onSubmit={pushinhistrywithinput} >
                <input 
                    
                value={forsearch}
                onChange={(e)=>setforsearch(e.target.value)}
                 className="header_input"
                  placeholder="Поиск по блогу" 
                  type="text"/>
                  <button type="submit" className="btn btn-dark">search</button>

                </form>
               
            </div>
               
           
        </div>
    )
} 
const mapstatetoprops=(state)=>{
    return{
        login:state.AuthReducer.login
    }
}

const mapdispachToProps={
    LoginFaild
}

export default connect(mapstatetoprops,mapdispachToProps)( Headers);
// onSubmit={pushinhistrywithinput}