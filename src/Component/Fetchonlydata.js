
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './buttontesthtml.css'


function Fetchonlydatafun() {
    const [post, setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setidFromButtonClick]=useState(1)

    const handleclick =()=>{
        setidFromButtonClick(id)

    }
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
 //axios.get(`http://localhost:5001/api/posts/${idFromButtonClick}`)
 //  axios.get(`http://localhost:5001/api/posts/${idFromButtonClick}`)
    .then(res=>{
        console.log(res)
        setPost(res.data)
    })

    .catch(err=>{
        console.log(err)
    })
}, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type='button' onClick={handleclick}>Fetch post</button>
             <div>
                 {post.application_name}
             </div>
        {/* <ul>
                {post.map(post=>(
                    <li key= {post.id}>{post.cuid}</li> 
                ))}
                </ul>*/}
            
        </div>
    )
}

export default Fetchonlydatafun
