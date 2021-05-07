import React,{useContext, useEffect} from 'react'
import {data} from './context/data'
import {statecontext} from './context/contex'
import './component.css'
import axios from 'axios'
const Component = () => {
    const [state,dispatch]=useContext(statecontext);
        const adder=(i)=>{
          dispatch({type:'ADD_TO_CART',payload:i});
          
        }
        useEffect(()=>{
         const putter=()=>{
          axios.post('https://reqres.in/api/articles',state)
          .then(res=>console.log(res.data));
         }
            },[state.cart])

    return (
        <div className="compo">
            {console.log(state.cart)}
      {data.map((i)=>{
        return(
          <div key={i.id} className="compo-div">
            <img src={i.img} className="img-compo"></img>
            <h1 className="dish">{i.dish}</h1>
            <h1 className="rs">💲{i.Rs}</h1>
            <button onClick={()=>{adder(i)}} className="btn-compo" >Add to Cart</button>
          </div>
        )
      })}
      
        </div>
    )
}

export default Component
