import React from 'react'

import err from './img/home 11.png';
import img2 from './img/jewellary.png';
import heal from './img/health11.png';
import gift from './img/gifts.png';
import beauty from './img/beayc.png';
import btr from './img/betyyyy.png';
import industrial from './img/gym.png';
import bags from './img/luggage and bags.jpg';
import furniture from './img/furniture.png';
import electricity from './img/Electrical tools.png';
import cons from './img/construction.jpg';


import pet from './img/petsupplies.jpg';
import food from './img/food.jpg';
import bev from './img/bevrages.jpg';
import agri from './img/agriculture.jpg';
import sch from './img/schoolaccessories.jpg';

import med from './img/medicaldevices.jpg';
import lig from './img/lightslogo.jpg';
import met from './img/metals.jpg';
import wom from './img/womensr.jpg';
import men from './img/menswear.jpg';


const Gslider = () => {
    const data =[
        {
         aerr: err,
         Name:'Home',   
        },
        {
            aerr: img2,
            Name:'Diamond', 
           },
           {
            aerr: heal,
            Name:'Health',   
           },
           {
            aerr: gift,
            Name:'Gifts',   
           },
           {
            aerr: beauty,
            Name:'Beauty',   
           },
           {
            aerr: industrial,
            Name:'Industrial',   
           },
           {
            aerr: bags,
            Name:'bags',   
           },
           {
            aerr: furniture,
            Name:'Furnitures',    
           },
           {
            aerr: electricity,
            Name:'Electricity',   
           },
           {
            aerr: cons,
            Name:'Construction',   
           },
           
    ]
    const data1 =[
        {
         aerr: pet,
         Name:'Pets',   
        },
        {
            aerr: food,
            Name:'foods', 
           },
           {
            aerr: bev,
            Name:'Soft Drinks',   
           },
           {
            aerr: agri,
            Name:'Agriculture',   
           },
           {
            aerr: sch,
            Name:'School',   
           },
           {
            aerr: med,
            Name:'Medical',   
           },
           {
            aerr: lig,
            Name:'Lights',   
           },
           {
            aerr: met,
            Name:'Metials',   
           },
           {
            aerr: wom,
            Name:'Wome wear',   
           },
           {
            aerr: men,
            Name:'Mens wear',   
           },
           
    ]
  return (
    <div>
      <section>
        <div className="container-fluid">
            <div className="row pt-5 pb-5">
                <div className="col-lg-12 col-md-6 col-sm-12">
                   <div className="">
                   <div className="row">
                  
                            <div className="col-lg-12 col-md-6 col-sm-12">
                                <div className="row" >
                                {data.map((res) => {
                      return (
                                    <div className="col-lg-1 op bor" style={{borderTopLeftRadius:"20px",borderBottomRightRadius:"20px", cursor:"pointer",}}>
                                    {/* <div className="p-2" > */}
                                        <div className='d-flex justify-content-center p-1 pb-0 pt-2'>
                                        <img src={res.aerr} alt="" style={{width:"50px",fontWeight:"900"}} />
                                        </div>
                                         <div className="d-flex justify-content-center pb-3">
                                            <h6>{res.Name}</h6>
                                        </div> 
                                    {/* </div> */}
                                    </div>
                                )
                             })}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-12 pt-5">
                                <div className="row" >
                                {data1.map((res) => {
                      return (
                                    <div className="col-lg-1 op bord" style={{borderTopRightRadius:"20px",borderBottomLeftRadius:"20px", cursor:"pointer",}}>
                                    {/* <div className="p-2" > */}
                                        <div className='d-flex justify-content-center p-1 pb-0 pt-2'>
                                        <img src={res.aerr} alt="" style={{width:"50px",fontWeight:"900"}} />
                                        </div>
                                         <div className="d-flex justify-content-center pb-3">
                                            <h6>{res.Name}</h6>
                                        </div> 
                                    {/* </div> */}
                                    </div>
                                )
                             })}
                                </div>
                            </div>
                            
                          </div>
                </div>
                   </div>
                </div>
            </div>
        {/* </div> */}
      </section>
    </div>
  )
}

export default Gslider
