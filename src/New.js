import { useState } from "react"

function handleItem(){
    setItem((item) => [...items , item])
}

function packingList({items}){
    items.map(ele => (
        <Item name={ele.name} age={ele.gae} />
    ))
}


function Details(){
    const [id , setId] = useState(null)
}