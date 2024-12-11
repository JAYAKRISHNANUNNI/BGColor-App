import { useState } from 'react'
import BgColor from './BgColor'

function App() {
  const [color, setColor] = useState('#ffffff')
  const handleChangeColor=()=>{
    const colors = ['#ff0000','#ffff00','#0000ff','#00ffff','#00ff00','#ff007f']
    const randomColor = colors[Math.floor.Math.random()*colors.length]
    setColor(randomColor)
  }

  return (
    <>
    <div>
      <BgColor color = {color} handleChangeColor={handleChangeColor}/>
    </div>
    </>
  )
}

export default App
