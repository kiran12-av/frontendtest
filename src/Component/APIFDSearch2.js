import './buttontesthtml.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

//import "react-image-tooltips/dist/index.css";
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'  // to have default style 
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/shift-away.css';




 function ApiSeasrch2() {
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



    const usersName = JSON.stringify({"searchFields":[{"fieldName":"isSystemTask","value":["Yes"],"operator":"IN","tableName":"task_type_sys_param","isDateCriteria":false},{"fieldName":"CREATED_DTTM","value":["2022-09-14","2022-09-21"],"operator":"between","tableName":"task_instance","isDateCriteria":true},{"fieldName":"TASK_NAME","value":["ASR Request"],"operator":"IN","tableName":"TASK_TYPE","isDateCriteria":false}]});
     var customConfig = {
    headers: {
    'Content-Type': 'application/json'
    }
};

Auth:{}
const sendVerificationEmail = () =>
  async () => {
    await Auth.sendEmailVerification();
    const result = await  axios.post('https://workmate-svc-test2.kubeodc-test.corp.intranet/RestService/Enterprise/v4/Work/task/advancedSearch?include=p,aa', usersName, customConfig);
  };




    // useEffect(() => {
    //     //axios.get(`http://localhost:5001/api/posts/${idFromButtonClick}`)
    //     axios.post(`${selects}`)
    //         .then(res => {
    //             console.log(res)
    //             setPosts(res.data)


    //         })

    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [selects])




    return (
        
        <div>
            
            <div>


                <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+1.5">API Search</font> </b><br></br>
            </div>
            {/* <h1> {selects}</h1> */}<br></br>
            
            <div>
            <Tippy content= {<a target ='_blank'style={{color:'white' ,'text-decoration':'none'}} href="https://wiki.mef.net/display/CESG/E-Line">An E-Line is a service type defined by the MEF for connecting exactly 2 UNIs where those 2 UNIs can communicate only with one another. E-Lines are defined in MEF 6.2 and MEF 10.3.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h><b>ELINE EVC </b></h></Tippy>
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<select value={selects} onChange={e => setSelects(e.target.value)}>
                    <option value="" selected > Select Environment</option>
                    <option value="https://workmate-svc-test2.kubeodc-test.corp.intranet/RestService/Enterprise/v4/Work/task/advancedSearch?include=p,aa">TEST1</option>


                </select>

            </div>
            <br></br>
            

            <div>




                {/* Working fine {(posts.length ? posts.map(post => <div key={post.id}><p>=================<b> Order info </b>  ===============</p> <b>Data type is : </b> {post.Data_Type} <br></br> <b>Order Id is :</b> {post.Order_Id} <br></br> <b>Updated on :</b>  {post.date}  <p>=================<b> End </b>  ====================</p></div>) : null)}   */}
                <br></br>
                {(posts.length ?Array.isArray(posts) && posts.map(post => <div key={post.id}><textarea rows="5" cols="50" value={`Order type  : ${post.BANDWIDTH} \nOrder id    : ${post.PRODUCTNAME}\nPOC         : ${post.POC}\nUpdated on  : ${post.TASK_NAME}`} ></textarea></div>) : null)}
{/* 
                const usersByLikes = posts.map(post => {              
                container[post.name] = post.BANDWIDTH;
                 return container;
                }) */}
            </div>

          

        </div>


    )



}

export default ApiSeasrch2