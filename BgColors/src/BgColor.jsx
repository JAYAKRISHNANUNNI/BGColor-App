import React from 'react'

function BgColor(props){
  return (
    <div style={{backgroundColor:props.color, height:"100vh" }}>
        <h1 >Background Colour Change :{props.color}</h1>
        <button onClick={props.handleChangeColor}>Change Color</button>
        </div>
  )
}

export default BgColor