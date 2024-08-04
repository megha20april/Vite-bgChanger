import { useState } from 'react'
import Button from './Components/Button'


function App() {
  const [color, setColor] = useState("gray")
  const colors = ["Pink", "Fuchsia", "Cyan", "Green", "Lime", "Yellow", "Orange", "Red"]

  return (
    <>
      <div className="fixed inset-0" style={{backgroundColor: color}}>
        <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 p-4 flex gap-5 rounded-3xl '>
          
          {/* this is a better way to add buttons
           by making an array of colour names
           and mapping each colour to each button using map function
           that map function would return an array of these buttons
           and then we can use that array in our JSX directly
           because in JSX, you can return arrays directly, 
           and React will render each element in the array sequentially. */}

          {colors.map((col)=><Button key={col} color={col} onClick={()=>setColor(col.toLowerCase())}/>)}

          {/* <Button color="Pink"  onClick={()=>setColor("pink")}/>
          <Button color="Fuchsia" onClick={()=>setColor("purple")}/>
          <Button color="Cyan" onClick={()=>setColor("cyan")}/>
          <Button color="Green" onClick={()=>setColor("green")}/>
          <Button color="Lime" onClick={()=>setColor("lime")}/>
          <Button color="Yellow"  onClick={()=>setColor("yellow")}/>
          <Button color="Orange" onClick={()=>setColor("orange")}/>
          <Button color="Red" onClick={()=>setColor("red")}/> */}
            
        </div>
      </div>

    </>
  )
}

export default App