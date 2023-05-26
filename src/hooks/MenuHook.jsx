
import { useEffect, useState } from "react"

const MenuHook =()=>{
    const [menu,setMenu]=useState([])
    const [loading,setLoading]=useState(true)
    console.log(menu)
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(result=>{
            
            setMenu(result)
            setLoading(false)
        })
    },[])

    return [menu,loading]
}
export default  MenuHook