
import { useEffect, useState } from "react"

const MenuHook =()=>{
    const [menu,setMenu]=useState([])
    const [loading,setLoading]=useState(true)
    console.log(menu)
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(result=>{
            setMenu(result)
            setLoading(false)
        })
    },[])

    return [menu]
}
export default  MenuHook