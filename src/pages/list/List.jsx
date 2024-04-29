import React, { useState } from 'react'
import './List.css'
const List = () => {
    const [list, setList] = useState("")
    const [ adddata , setAddtada] = useState([])

    let handleAdd = ()=>{
        setAddtada([...adddata,
            {
                id : adddata.length+1,
                data:list
            }
        ])
        setList("")
    }
    let handleDelete = (id)=>{
        let updateData = adddata.filter((value)=> value.id !== id )
        setAddtada(updateData)
    }
  return (
    <div className='list_box'>
        <h1>add list</h1>
      <input className='list_input' value={list} type='text' placeholder='enter your list name' onChange={(e)=> setList(e.target.value)}/>
      <div className='item_box'>
        <ul>
            {
                adddata.map((item)=>(
                    <li key={item.id}>{item.data} <button onClick={()=>handleDelete(item.id)}>delete</button></li>
                ))
            }
        </ul>
      </div>
     <div className='list_btn_box'>
        <button className='btn' onClick={handleAdd} >add</button>
     </div>
    </div>
  )
}

export default List