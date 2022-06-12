import React, { useEffect, useState } from 'react'


const List = ({getItems}) => {
    const[items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(3))
        console.log("updating Items")
    }, [getItems])
    
  return items.map(item => <div key={item}>{item}</div>)
}

export default List