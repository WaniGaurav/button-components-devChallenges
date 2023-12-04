import React from 'react'

function MainContent() {
  const btnArray = [
    {
      id:1,
      disabled:"",
      type:"button",
      class:"default",
      text:"<Button />",
    },
    {
      id:2,
      disabled:"",
      type:"button",
      class:"outline",
      text:"<Button variant=”outline” />",
    },
    {
      id:3,
      disabled:"",
      type:"button",
      class:"text",
      text:"<Button variant=”text” />",
    },
    {
      id:4,
      disabled:"",
      type:"button",
      class:"disableShadow",
      text:"<Button disableShadow />",
    },
    {
      id:5,
      disabled:"disabled",
      type:"",
      class:"disabled-btn",
      text:"<Button disabled />",
    },
    {
      id:6,
      disabled:"disabled",
      type:"",
      class:"disabled-text",
      text:"<Button variant=”text” disabled />",
    },
    {
      id:7,
      disabled:"",
      type:"button",
      class:"btn-startIcon",
      text:"<Button startIcon=”local_grocery_store” />",
    },
    {
      id:8,
      disabled:"",
      type:"button",
      class:"btn-endIcon",
      text:"<Button endIcon=”local_grocery_store” />",
    },
    {
      id:9,
      disabled:"",
      type:"button",
      class:"btn-sm",
      text:"<Button size=”sm” />",
    },
    {
      id:10,
      disabled:"",
      type:"button",
      class:"btn-md",
      text:"<Button size=”md” />",
    },
    {
      id:11,
      disabled:"",
      type:"button",
      class:"btn-lg",
      text:"<Button size=”lg” />",
    },
    {
      id:12,
      disabled:"",
      type:"button",
      class:"default",
      text:"<Button color=”default” />",
    },
    {
      id:13,
      disabled:"",
      type:"button",
      class:"btn-primary",
      text:"<Button color=”primary” />",
    },
    {
      id:14,
      disabled:"",
      type:"button",
      class:"btn-secondary",
      text:"<Button color=”secondary” />",
    },
    {
      id:15,
      disabled:"",
      type:"button",
      class:"btn-danger",
      text:"<Button color=”danger” />",
    },
  ]
  return (
    <div className='btn-div flex-column'>
    {/* <div className='btn-generate'> */}
      {btnArray.map((element) => (
        <div key={element.id} className='btn-generate flex-column'>
          <span className='btn-title'>{element.text}</span>
          {!element.disabled ? <button type={element.type} className={element.class}>Default</button> : <button disabled={element.disabled} className={element.class}>Default</button>}
          {/* <button disabled={element.disabled} type={element.type} className={element.class}>Default</button> */}
        </div>
      ))}
      {/* <button disabled="disabled">Default</button> */}
    </div>
  )
}

export default MainContent