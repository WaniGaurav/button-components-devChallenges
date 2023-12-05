import React from 'react'

export default function MainContent({
  disabled,
  type,
  classv,
  text
}) 


{
  
  return (
    // <div className='btn-div flex-column'>
    <>
      {!disabled ?
        <div className='btn-generate flex-column'>
          <span className='btn-title'>{text}</span>
          <button type={type} className={classv} onClick={(e) => (console.log(`${text} button clicked`))}>Default</button>
        </div>
      :
        <div className='btn-generate flex-column'>
          <span className='btn-title'>{text}</span>
          <button disabled={disabled} className={classv}>Default</button>
        </div>
      }
    </>
    // </div>
    // {/* <div className='btn-generate'> */}
    // {/* <button disabled={element.disabled} type={element.type} className={element.class}>Default</button> */}
    //   {/* {btnArray.map((element) => (
    //     <div key={element.id} className='btn-generate flex-column'>
    //       <span className='btn-title'>{element.text}</span>
    //       {!element.disabled ? <button type={element.type} className={element.class}>Default</button> : <button disabled={element.disabled} className={element.class}>Default</button>}
    //     </div>
    //   ))} */}
  )
}
