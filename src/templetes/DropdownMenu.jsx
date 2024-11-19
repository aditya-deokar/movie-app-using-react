import React from 'react'

const DropdownMenu = ({func, name, options}) => {
  return (
    <div className='h-fit'>
         <label className='bg-slate-900 px-3 py-2 rounded-md' htmlFor="trend" >{name}</label>
             <select onChange={func}  className='bg-slate-900 border-none outline-none px-3 py-1 ml-2 rounded-md' name="trend" id="trend">
                       {options.map((item,i)=>(
                             <option key={i} value={item}>{item}</option>
                       ))}
                       
             </select>
     </div>
  )
}

export default DropdownMenu