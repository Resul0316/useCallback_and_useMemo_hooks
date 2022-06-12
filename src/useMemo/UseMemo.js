import React, { useState, useMemo } from 'react'

//*ehn you want to make a slowFunction and we don't want to make all in the slowFunction we use 
//*  useMemo to memorize the function that we want to use in slowFunction


const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    }, [number])

    const themeStyle ={
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

  return (
    <div>
        <input type="number" value={number} 
        onChange={e =>setNumber(parseInt(e.target.value))} />
        <button onClick={()=>setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num){
    console.log("calling Sow function")
    for(let i=0; i<=100000000; i++) {}
    return num * 2
}



export default UseMemo