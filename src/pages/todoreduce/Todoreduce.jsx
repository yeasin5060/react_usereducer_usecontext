import React, { useReducer, useState } from 'react'
import { reduce } from '../../reducer/reducer'
import './Todoreduce.css'

const Todoreduce = () => {
    const [ inputvalue , setInputvalue] = useState("")
    const [ state , dispatch] = useReducer(reduce,[])
  return (
        <div className='reducer_box'>
            <h1>Reducer todo</h1>
            <input className='reducer_input' value={inputvalue} type='text' placeholder='enter your list name' onChange={(e)=> setInputvalue(e.target.value)}/>
            <ul className='reducer_item_box'>
                {
                    state.map((item)=>(
                        <li key={item.id}>{item.data}<button onClick={()=> dispatch({type:"delete", data:item.id})}>delete</button></li>
                    ))
                }
            </ul>
            <div className='reducer_btn_box'>
                <button className='reducer_btn' onClick={()=>dispatch({type:"add" , data: inputvalue}, setInputvalue(""))}>add</button>
            </div>
        </div>
  )
}

export default Todoreduce