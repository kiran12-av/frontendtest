import React, { useState, useEffect } from 'react'
import axios from 'axios'


function DataFetchingSrchBttn() {
    const [post, setPost] = useState({})
    const [id, setId] = useState()
    const [idFromButtonClick, setidFromButtonClick] = useState(1)

    const handleclick = () => {
        setidFromButtonClick(id)

    }
    useEffect(() => {
        axios.get(`/api/posts//${idFromButtonClick}`)
        //  axios.get(`http://localhost:5001/api/posts`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    return (
          

                
                <div>
                     <div> &nbsp;&nbsp;&nbsp;</div> <h1>Fetch the post     </h1>
                    <input type="text" placeholder="Enter ID " value={id} onChange={e => setId(e.target.value)} />
                    <button type='button' onClick={handleclick}>Fetch post</button><br></br>
                    <div>{post.cuid}</div>
                    <div>{post.application_name}</div>
                    <div>{post.issue_description}</div>
                    <div>{post.date}</div>


                    <div>
<table class="viewtable" >
  <tr>
    <th >Name</th>
    <th>Application</th> 
    <th>description</th> 
    <th>Created Date</th> 


  </tr>
  <tr>
    <td>{post.cuid}</td>
    <td>{post.application_name}</td>
    <td>{post.issue_description}</td>
    <td>{post.date}</td>
  </tr>
 
  </table>

</div>

                </div>


   
            )
}

            export default DataFetchingSrchBttn


