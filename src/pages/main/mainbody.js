import React, { useState } from 'react';
import { useHistory} from "react-router-dom";
import Highlighter from "react-highlight-words";

const MainBody=({forsearch})=>{

    const [slideintex, setslideintex] = useState(1);
    if(slideintex < 1){
        setslideintex(3)
    }
    if(slideintex > 3){
        setslideintex(1)
    }
  const histry =useHistory();
 
 const  pushinhistry=()=>{
        histry.push("/text")
  }
    return(
        <>
                    <div className="block">
            <div  className="phone__top"></div>
            <div className="phone__bottom">
            <div className="phone__title">
            Как писать код быстро и безболезненно?
            </div>
            <div className="phone__descr">
            <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.'
                
                />


            
            </div>
            <div className="phone__footer">
                <div className="phone__date">21.06.2020</div>
                <div className="phone__reclam">
                создание сайтов
                </div>
                
                <button onClick={pushinhistry} className="red">читать</button>
                
                
            </div>
            </div>
            </div>
            <div className="block block__video">
            <iframe title="hello" width="100%" height="400" src="https://www.youtube.com/embed/nwXFb4NC08I?list=RDnwXFb4NC08I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="phone__title">


            <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                />
            
            </div>

            <div className="phone__footer">
                <div className="phone__date">21.06.2020</div>
                <div className="phone__reclam">
                создание сайтов
                </div>
                <button onClick={pushinhistry} className="red">читать</button>
            </div>


            </div>
            <div className="slider__wraper">
                    <div style={slideintex===1?{display:"block"}:{display:"none"}} className="sliter__item">

                    <div className="block">
            <div className="phone__topp"></div>
            <div className="phone__bottom">
            <div className="phone__title">
            Как писать код быстро и безболезненно?
            </div>
            <div className="phone__descr">
            <Highlighter
                highlightClassName="text-light bg-dark"
                searchWords={[`${forsearch}`]}
                autoEscape={true}
                textToHighlight ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
                "
                />


             </div>
            <div className="phone__footer">
                <div className="phone__date">21.06.2020</div>
                <div className="phone__reclam">
                создание сайтов
                </div>
                <button onClick={pushinhistry} className="red">читать</button>
            </div>
            </div>
            </div>


                    </div>
                    
                    <div style={slideintex===2?{display:"block"}:{display:"none"}} className="sliter__item">

                            <div className="block">
                            <div className="phone__toppp"></div>
                            <div className="phone__bottom">
                            <div className="phone__title">
                            Как писать код быстро и безболезненно?
                            </div>
                            <div className="phone__descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
                            </div>
                            <div className="phone__footer">
                            <div className="phone__date">21.06.2020</div>
                            <div className="phone__reclam">
                            создание сайтов
                            </div>
                            <button onClick={pushinhistry} className="red">читать</button>
                            </div>
                            </div>
                            </div>


                            </div>


                            <div style={slideintex===3?{display:"block"}:{display:"none"}} className="sliter__item">

                                <div className="block">
                                <div className="phone__topppp"></div>
                                <div className="phone__bottom">
                                <div className="phone__title">
                                Как писать код быстро и безболезненно?
                                </div>
                                <div className="phone__descr">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
                                </div>
                                <div className="phone__footer">
                                <div className="phone__date">21.06.2020</div>
                                <div className="phone__reclam">
                                создание сайтов
                                </div>
                                <button onClick={pushinhistry} className="red">читать</button>
                                </div>
                                </div>
                                </div>


                                </div>



                    <div className="control_btns">
            <div onClick={()=>setslideintex(slideintex-1)} className="control_btn fa fa-chevron-left"></div>
            <div onClick={()=>setslideintex(1)} className="control_btn">1</div>
            <div onClick={()=>setslideintex(2)} className="control_btn">2</div>
            <div onClick={()=>setslideintex(3)} className="control_btn">3</div>
            <div onClick={()=>setslideintex(slideintex+1)} className="control_btn fa fa-chevron-right"></div>
            </div>

            </div>
           
           
        
        
        </>
    )
}

 export default MainBody;