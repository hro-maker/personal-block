import React, {useState } from 'react';
import Sitebar from '../../components/sitebar';
import '../profie/profile.scss';
import Headers from './../../components/header/header';
import './reset.scss';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Loadingg, LoginFaild, PageLoaded, Usergretetorlogin } from '../../redux/action/auth';
import Loader from '../../components/loader/loader';
import M from 'materialize-css';

const Reset=({LoginFaild,Usergretetorlogin,PageLoaded,loading,Loadingg})=>{
  
    
    PageLoaded();
    const [email, setemail] = useState("");
    const [pasword, setpasword] = useState("");

    const loginwitemail=(e)=>{
       
        e.preventDefault();
        Loadingg();
        firebase.auth().signInWithEmailAndPassword(email, pasword)
        .then((user) => {
            // Signed in 
            // ...
            let toastt= ` <div class="alert alert-primary alert-success" role="alert">
                                Welcome 
                            </div>`
            M.toast({html: toastt})
            console.log(user);
            Usergretetorlogin()
             const stemail=JSON.stringify(email)
            localStorage.setItem('username',stemail)
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            JSON.stringify(errorMessage)
            const loc= JSON.stringify(false);
            localStorage.setItem('bool',loc);
            const str = errorCode.substring(5);
        //    let toastHTML = `<div class="alert alert-primary" role="alert">${str} </div>`
            let toast= ` <div class="alert alert-primary alert-danger" role="alert">
                            ${str}
                            </div>`
            LoginFaild();
                if(error.code){
                    // setemail(str)
                    M.toast({html: toast})
                }
           
        });
        setemail("");
        setpasword("");
       
    }
    if(loading){
        return(
            <Loader/>
        )
    }
    return(
        <div className="reset_wraper">   
        <Sitebar/>
        <Headers/>
        
                <div className="reset_content">
                <h1 className="page__title  page__title--center">Вход </h1>
            <form className="form  form--auth" onSubmit={loginwitemail}  >
    <div className="form__group  form__group--md">
        <input className="form__control form__control_50" required value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Ваш e-mail"/>
        <input className="form__control form__control_50" required value={pasword} onChange={(e)=>setpasword(e.target.value)} type="password" placeholder="Пароль"/>
        <span className="form__line"></span>
    </div>

    <div className="form__footer  form__footer--center">
        <div className="form__group  form__group--md">
            <button  className="btnn  btnn--blue  btnn--rounded  btnn--sm" type="submit">Вход</button>
        </div>

        <ul className="form__footer-list">
            <li className="form__footer-list-item" >
                {/* <a href="https://stackoverflow.com/questions/54579558/clicking-a-link-when-enter-key-is-pressed-using-react">вход</a> */}
            </li>
            <li className="form__footer-list-item">
                    
                <Link to="/profile">
                <div >регистрация</div>
                </Link>
                
            </li>
        </ul>
    </div>
        </form>
                </div>
        </div>
    )
}

const mapstatetoprops=(state)=>{
    return{
       
        loading:state.AuthReducer.loading
    }
}
const mapdispachToProps={
    Usergretetorlogin,
    LoginFaild,
    PageLoaded,
    Loadingg
}
export default connect(mapstatetoprops,mapdispachToProps)( Reset);