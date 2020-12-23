import React from 'react';
import Mainpage from './pages/main/main';
import './app.scss';
import TextPage from './pages/textPage/textpage';
import {Switch,Route, Redirect} from "react-router-dom";
import Profile from './pages/profie/profile';
import Reset from './pages/reset/reset';
import SearchPage from './pages/searchpage/searchpage';
import Userlist from './pages/users/our-users';
import { connect } from 'react-redux';
import { PageLoaded } from './redux/action/auth';
function App({login,PageLoaded}) {
  PageLoaded();
  let routes=(
    <>
      <Route path="/profile"  > <Profile/> </Route>
      <Route exact path="/"  > <Reset/> </Route>
      <Redirect to="/" />
    </>
)

            if(login){
               routes=(
                <>
                <Route exact path="/" > <Mainpage/> </Route>
                <Route path="/text"  ><TextPage/></Route>
                <Route path="/search"  > <SearchPage/> </Route>
                <Route path="/users"  > <Userlist/> </Route>
                <Redirect to="/" />
                </>
              )
            }
         
  return (
    <div className="App">
      <div className="wraper">
        <Switch>
        {routes}
        </Switch>
        
       
     
      </div>
     

    </div>
  );
}
const mapstatetoprops=(state)=>{
  return{
    login:state.AuthReducer.login
  }
}
const mapdispachToProps={
  PageLoaded
}
export default connect( mapstatetoprops,mapdispachToProps)( App);
