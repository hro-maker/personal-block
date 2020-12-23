
import { React } from 'react';
import './loader.scss';
const Loader =()=>{
    return(
        <div className="loader_wraper">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      
    )
}
export default Loader;