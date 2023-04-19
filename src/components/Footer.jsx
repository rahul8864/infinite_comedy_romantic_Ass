import React, { useState } from 'react'

export default function Footer({setCount, count}) {
    // const [counter, setCounter] = useState(count)

    const handleCount = (val) => {
        if (val === 'in') {
            if(count < 3) {
                setCount(count + 1);
            }
        } else if (val === 'de') {
            if(count > 1) {
                setCount(count - 1);
            }
        }
    }
    
  return (
    <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
     <div className='d-flex justify-content-between' style={{ width: "150px" }}>
        <button className={`btn btn-primary ${count === 1 ? "disabled" : ''}`} onClick={() => handleCount('de')}>Prev</button>
        <button className={`btn btn-primary ${count === 3 ? "disabled" : ''}`} onClick={() => handleCount('in')}>Next</button>
     </div>
    </div>
  )
}
