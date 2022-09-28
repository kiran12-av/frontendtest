import './buttontesthtml.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

//import "react-image-tooltips/dist/index.css";
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'  // to have default style 
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/shift-away.css';




function Supportselect() {
    const [selects, setSelects] = useState();




    const [posts, setPosts] = useState([])



    //  function primarystatus() {
    //     setData("primary");
    // } 

    //      function submit(test){

    //         axios.get(`${test}`)

    //             .then(res => {
    //                 console.log(res)
    //                 setPosts(res.data) 
    //   return
    //             })

    //             .catch(err => {
    //                 console.log(err)
    //              return
    //             })
    //     }



    useEffect(() => {
        //axios.get(`http://localhost:5001/api/posts/${idFromButtonClick}`)
        axios.get(`${selects}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)


            })

            .catch(err => {
                console.log(err)
            })
    }, [selects])




    return (
        
        <div>
            
            <div>


                <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+1.5">Fetch Sample Order ID</font> </b><br></br>
            </div>
            {/* <h1> {selects}</h1> */}<br></br>
            
            <div>
            <Tippy content= {<a target ='_blank'style={{color:'white' ,'text-decoration':'none'}} href="https://wiki.mef.net/display/CESG/E-Line">An E-Line is a service type defined by the MEF for connecting exactly 2 UNIs where those 2 UNIs can communicate only with one another. E-Lines are defined in MEF 6.2 and MEF 10.3.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h><b>ELINE EVC </b></h></Tippy>
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<select value={selects} onChange={e => setSelects(e.target.value)}>
                    <option value="" selected > Select Environment</option>
                    <option value="http://localhost:5001/api/posts/EVC-1">TEST1</option>
                    <option value="http://localhost:5001/api/posts/EVC-2">TEST2</option>
                    <option value="http://localhost:5001/api/posts/EVC-3" >TEST3</option>

                </select>

            </div>
            <br></br>
            <div>
               <Tippy content= {<a target ='_blank'style={{color:'white' ,'text-decoration':'none'}} href="https://www.google.com">This is a connection, delivered via Ethernet or private-line circuits, that isn't shared with other customers. While it typically comes at premium prices, it provides business-grade features and higher speeds than many shared-access alternatives.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h><b>DIA</b></h></Tippy>
                &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<select value={selects} onChange={e => setSelects(e.target.value)}>
                    <option value="" selected > Select Environment</option>
                    <option value="http://localhost:5001/api/posts/DIA-1" >TEST1</option>
                    <option value="http://localhost:5001/api/posts/DIA-2">TEST2</option>
                    <option value="http://localhost:5001/api/posts/DIA-3" >TEST3</option>

                </select>

            </div>
            <br></br>
            <div>
                <Tippy content= {<a target ='_blank'style={{color:'white' ,'text-decoration':'none'}} href="https://wiki.mef.net/display/CESG/E-Access">An E-Access Service is an OVC-based service with at least one UNI OVC End Point and one ENNI End Point.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h><b>EACCESS</b></h></Tippy>
                &nbsp;   &nbsp; &nbsp;  &nbsp; &nbsp;    <select value={selects} onChange={e => setSelects(e.target.value)}>
                    <option value="" selected > Select Environment</option>
                    <option value="http://localhost:5001/api/posts/EACCESS-1">TEST1</option>
                    <option value="http://localhost:5001/api/posts/EACCESS-2">TEST2</option>
                    <option value="http://localhost:5001/api/posts/EACCESS-3" >TEST3</option>

                </select>

            </div>
            <br></br>


            <div>

            <Tippy content= {<a target ='_blank'style={{color:'white' ,'text-decoration':'none'}} href="https://wiki.mef.net/display/CESG/E-Line">An E-Line is a service type defined by the MEF for connecting exactly 2 UNIs where those 2 UNIs can communicate only with one another. E-Lines are defined in MEF 6.2 and MEF 10.3.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h><b>Monarch</b></h></Tippy>
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  <select value={selects} onChange={e => setSelects(e.target.value)}>
                    <option value="" selected > Select Environment</option>
                    <option value="http://localhost:5001/api/posts/Monarch-Eline-1">TEST1</option>
                    <option value="http://localhost:5001/api/posts/Monarch-Eline-2">TEST2</option>
                    <option value="http://localhost:5001/api/posts/Monarch-Eline-3">TEST3</option>

                </select>



            </div>







            <div>




                {/* Working fine {(posts.length ? posts.map(post => <div key={post.id}><p>=================<b> Order info </b>  ===============</p> <b>Data type is : </b> {post.Data_Type} <br></br> <b>Order Id is :</b> {post.Order_Id} <br></br> <b>Updated on :</b>  {post.date}  <p>=================<b> End </b>  ====================</p></div>) : null)}   */}
                <br></br>
                {(posts.length ?Array.isArray(posts) && posts.map(post => <div key={post.id}><textarea rows="5" cols="50" value={`Order type  : ${post.Data_Type} \nOrder id    : ${post.Order_Id}\nPOC         : ${post.POC}\nUpdated on  : ${post.date}`} ></textarea></div>) : null)}
            </div>



            <div>


            <br></br>      <b>Fetch Test Environment data </b>
           <a target ='_blank' href="https://centurylink.sharepoint.com/:x:/r/sites/LABPortsUtilization/Shared%20Documents/General/Orders%20Details.xlsx?d=web694dce2cf44074abd64566e5fdcc65&csf=1&web=1&e=8QPCvx"><br></br><button> <t></t><t></t>Click here</button></a>


            </div>
           

        </div>


    )



}

export default Supportselect