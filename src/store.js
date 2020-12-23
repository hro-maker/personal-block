import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './redux/reducer/reducer';
import YoutubeReducer from './redux/reducer/youtubeplayer';
import Userreducer from './redux/reducer/userreducer';
import AuthReducer from './redux/reducer/authreducer';
import ComentReducer from './redux/reducer/comentreducer';


const reducer =combineReducers({
    YoutubeReducer:YoutubeReducer,
    RootReducer:RootReducer,
    Userreducer:Userreducer,
    AuthReducer:AuthReducer,
    ComentReducer:ComentReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

