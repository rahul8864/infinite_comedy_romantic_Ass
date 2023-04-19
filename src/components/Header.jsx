import React, { useState } from 'react'

export default function Header({ title }) {
    const [search, setSearch] = useState(false)
    console.log(search)
  return (
    <div style={{ width: '100%', position: 'sticky', top: '0', background: 'transparent' }} search={search}>
    <h2 className='position-absolute' style={{ transform: "translate(50%, 50%)", top: "10px", left: '20px', background: 'transparent'}}>{title}</h2>
        <img className='' src="/src/assets/nav_bar.png" alt="" width="100%" height="100px" style={{ background: 'transparent'}} />
        <img className='position-absolute img-fluid' src="/src/assets/search.png" 
        alt="" style={{height: '20px', transform: "translate(50%, 50%)", top: "10px", right: '20px', background: 'transparent'}} 
        onClick={() => setSearch(!search)} />
    </div>
  )
}
