import React, { useState, useCallback } from 'react'
import List from "./List";

const CallbackHook = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)
//*useCallback's difference with useMemo is that we cannot use incrementor with useMemo
    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number +1 + incrementor, number+2 + incrementor]
    }, [number])

    const theme ={
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }


  return (
    <div style={theme}>
        <input
        type="number" 
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={()=>setDark(prevDark => !prevDark)}>Toggle Theme</button>
        <List getItems={getItems}/>
    </div>
  )
}

export default CallbackHook