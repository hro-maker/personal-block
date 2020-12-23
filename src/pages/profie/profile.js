import React, { useState } from 'react';
import Sitebar from './../../components/sitebar/index';
import Headers from './../../components/header/header';
import './profile.scss';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
import {db} from '../../server/firebase';
import { connect } from 'react-redux';
import { LoginFaild, Usergretetorlogin } from '../../redux/action/auth';
import M from 'materialize-css';
// import {PushUsersArr} from '../../redux/action/useraction';
const Profile=({Usergretetorlogin,LoginFaild})=>{

    const histry =useHistory();
       
 const  pushinhistry=()=>{
        histry.push("/")
  }

    const [email, setemail] = useState("");
    const [pasword, setpasword] = useState("");
    const [username, setusername] = useState("");
    
    const createAcaount=(e)=>{

        e.preventDefault();
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, pasword)
        .then((user) => {
            Usergretetorlogin()
            pushinhistry()
            localStorage.setItem('username',email)
            let toastt= ` <div class="alert alert-primary alert-success" role="alert">
                                Welcome 
                            </div>`
            M.toast({html: toastt})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // setemail(errorCode.substring(5));
           const ffor= errorCode.substring(5);
           let toast= ` <div class="alert alert-primary" role="alert">
                         ${ffor}
                             </div>`
                         M.toast({html: toast})
            console.log(errorCode);
            console.log(errorMessage);
            LoginFaild()
        });
        const Data={username}    
        db.collection("users").doc(`${username}`).set(Data)
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        setemail("");
        setpasword("");
        setusername("");
       
    }
    return(
        <div className="profile_wraper">
           <Sitebar/>
           <div className="profile_container">
               <Headers/>
               <div className="profile_content">
                  
                    
               <form onSubmit={createAcaount} className="form form_ford" >
    <div className="cabinet">
        <div className="cabinet__form">
            <div className="form__group  form__group--md">
                <input required  value={username} onChange={(e)=>setusername(e.target.value)} className="form__control form__control_850" type="text" placeholder="Ваше имя" />
                <span className="form__line"></span>
            </div>

            <div className="form__group  form__group--md">
                <input required   className="form__control form__control_850" value={email} onChange={(e)=>setemail(e.target.value)}    type="email" placeholder="Ваш e-mail" />
                <span className="form__line"></span>
            </div>

            <div className="form__group  form__group--md">
                <input required className="form__control form__control_850" value={pasword} onChange={(e)=>setpasword(e.target.value)}  minLength={6} type="password" placeholder="Новый пароль"/>
                <span className="form__line"></span>
            </div>

            {/* <div className="form__group  form__group--md">
                <input className="form__control" type="password" placeholder="Подтвердите пароль"/>
                <span className="form__line"></span>
            </div> */}
        </div>

        <div className="cabinet__avatar">
            {/* <img src="https://placehold.it/150" alt=""/>

            <label className="cabinet__file">
                <input type="file"/>
                выбрать  аватар
            </label> */}

            <Link to="/">
            <div className="reset_linkk">Вход</div>
            </Link>
          
        </div>
    </div>

    <div className="form__footer form__footer_cent">
        <button className="btnn  btnn--bluee  btnn--rounded  btnn--sm" type="submit">регистрация</button>
    </div>
    </form>
               </div>
           </div>
        </div>
    )
}

const mapdispachToProps={
    Usergretetorlogin,
    LoginFaild
}
export default connect(null,mapdispachToProps)( Profile);