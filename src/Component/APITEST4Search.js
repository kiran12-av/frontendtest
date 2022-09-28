import React from 'react';
import ReactDOM from 'react-dom';
//import React from 'react'
import './Pushapp.css'
//import Select from "react-select";


export default class APIPush4 extends React.Component {
    constructor() {
        super();
        this.state = { "searchFields": [{ "fieldName": "isSystemTask", "value": ["Yes"], "operator": "IN", "tableName": "task_type_sys_param", "isDateCriteria": false }, { "fieldName": "CREATED_DTTM", "value": ["2022-09-14", "2022-09-21"], "operator": "between", "tableName": "task_instance", "isDateCriteria": true }, { "fieldName": "TASK_NAME", "value": ["ASR Request"], "operator": "IN", "tableName": "TASK_TYPE", "isDateCriteria": false }] }
        this.state.resptaskresults = ''
        this.state.ORDERDATA = ''
        this.state.PRODUCTDATA = ''
        this.state.DIAPRODUCT = ''
        this.state.DIAORD = ''
        this.state.IPVPNPRODCT = ''
        this.state.IPVPNORD = ''
        this.state.WSALEUNIPROD = ''
        this.state.WSALEUNIORD = ''
        this.state.UNIPROD = ''
        this.state.UNIORD = ''
        this.state.application_name=''
    }


    submit() {

        console.log(this.state)
        let url = "https://workmate-svc-test4.kubeodc-test.corp.intranet/RestService/Enterprise/v4/Work/task/advancedSearch?include=p,aa";
        let data = this.state;
        fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-Username": "AA63458"
            },
            body: JSON.stringify(data)
        }).then((result) => {

            result.json().then((resp) => {

                // console.log("resp",resp.taskResults)
                const { PRODUCTNAME, ORDER_ID } = resp.taskResults
                // // console.log(resp.taskResults[1])
                // console.log(PRODUCTNAME)
                // var strPRODUCTNAME = JSON.stringify(PRODUCTNAME);
                // console.log("string productname is "+strPRODUCTNAME)
                // console.log(ORDER_ID)




                // const{results}=resp.taskResults
                //document.getElementById('res').textContent=results

                //    this.setState({document.getElementById('productname').textContent=str.PRODUCTNAME})
                //    this.setState({document.getElementById('productname').textContent=str.PRODUCTNAME})



                let resptaskresults = resp.taskResults.map(({ PRODUCTNAME, ORDER_ID }) => {
                    //   console.log(PRODUCTNAME)
                    //  console.log(ORDER_ID) 


                    // working fine section
                    this.state.ORDERDATA += ORDER_ID + `<br></br>`
                    this.state.PRODUCTDATA += PRODUCTNAME + `<br></br>`
                    console.log(this.state.ORDERDATA)
                    console.log(this.state.PRODUCTDATA)
                    document.getElementById('productname').innerHTML = this.state.PRODUCTDATA
                    document.getElementById('orderid').innerHTML = this.state.ORDERDATA





                    // if (PRODUCTNAME === 'Dedicated Internet Access') {
                    //     this.state.DIAORD += ORDER_ID + `<br></br>`
                    //     this.state.DIAPRODUCT += PRODUCTNAME + `<br></br>`
                    // }
                    // document.getElementById('diaprod').innerHTML = this.state.DIAPRODUCT
                    // document.getElementById('diaorder').innerHTML = this.state.DIAORD




                    // if (PRODUCTNAME === 'IP VPN Port and Access') {
                    //     this.state.IPVPNPRODCT += ORDER_ID + `<br></br>`
                    //     this.state.IPVPNORD += PRODUCTNAME + `<br></br>`
                    // }
                    // document.getElementById('ipvpnprod').innerHTML = this.state.IPVPNPRODCT
                    // document.getElementById('ipvpnord').innerHTML = this.state.IPVPNORD




                    // if (PRODUCTNAME === 'Wholesale UNI') {
                    //     this.state.WSALEUNIPROD += ORDER_ID + `<br></br>`
                    //     this.state.WSALEUNIORD += PRODUCTNAME + `<br></br>`
                    // }
                    // document.getElementById('wsaleuniprod').innerHTML = this.state.WSALEUNIPROD
                    // document.getElementById('wsaleuniord').innerHTML = this.state.WSALEUNIORD




                    // if (PRODUCTNAME === 'UNI') {
                    //     this.state.UNIPROD += ORDER_ID + `<br></br>`
                    //     this.state.UNIORD += PRODUCTNAME + `<br></br>`
                    // }
                    // document.getElementById('uniprod').innerHTML = this.state.UNIPROD
                    // document.getElementById('uniord').innerHTML = this.state.UNIORD


                })




                // resptaskresults =resp.taskResults.map((values)=>{
                //     //   console.log(PRODUCTNAME)
                //     //  console.log(ORDER_ID) 

                // //    this.state.PRODUCTDATA+=values.PRODUCTNAME
                // //     this.state.ORDERDATA+=values.ORDER_ID

                //      //document.getElementById('productname').innerHTML=this.state.PRODUCTDATA
                //      //document.getElementById('orderid').innerHTML=this.state.ORDERDATA

                //     })



                console.log(resp.taskResults)
                console.log(resp.taskResults.length)
                // console.log(resptaskresults[2].PRODUCTNAME)



                // for (let i=resp.taskResults.length-1; i>=1; i--){
                //     console.log(resp.taskResults[i].PRODUCTNAME)
                //     console.log(resp.taskResults[i].ORDER_ID)


                //         document.getElementById('productname').textContent=resp.taskResults[i].PRODUCTNAME
                //         document.getElementById('orderid').textContent=resp.taskResults[i].ORDER_ID  

                // } 





                // for(let i=0;i<resp.taskResults.length;i++)
                // resp.taskResults.map(({PRODUCTNAME,ORDER_ID})=>{
                //     console.log(PRODUCTNAME)
                //     console.log(ORDER_ID)
                //     document.getElementById('productname').textContent=PRODUCTNAME
                //    document.getElementById('orderid').textContent=ORDER_ID 
                // })


            })


        })

    }

    //     handleChange = (e)=>{
    //     this.setState({application_name:e.target.value})
    // }  

    // //for status
    // handleChange2 = (e)=>{
    //     this.setState({status:e.target.value})
    // }  

    handleChange = (e)=>{
        this.setState({application_name:e.target.value})
    }  


    render() {


        const handler=e=>{

this.state.id=(e.id)
        }

        return (
            <div>
                {/* <div> &nbsp;&nbsp;&nbsp;</div> <b>  Open New ticket </b><br></br><br></br>
               <input type= "text" value={this.state.cuid} name="title" placeholder="enter cuid" onChange={(data)=>{this.setState({cuid:data.target.value})}}></input><br></br>   

               <select id="list" value={this.state.value} onChange={this.handleChange}>
                         <option value="bpms"  >BPMS</option>
                         <option value="swift">Swift</option>
                        <option value="gca">GCA</option>
                         <option value="ism" selected > Select App</option>
                </select><br></br>

                <select id="list2" value={this.state.value} onChange={this.handleChange2}>
                         <option value="open"  >Open</option>
                     
                         <option value="" selected > Select Status</option>
                </select><br></br> */}


                {/* <input type= "text" value={this.state.application_name} placeholder ="enter application name"name="body" onChange={(data)=>{this.setState({application_name:data.target.value})}}></input> */}
                {/* <textarea  value={this.state.TASK_INSTANCE_ID} placeholder ="enter description "name="body" onChange={(data)=>{this.setState({issue_description:data.target.value})}}></textarea><br></br> */}

                {/* {(resp.taskResults.length ?Array.isArray(resp.taskResults) && resp.taskResults.map(post => <div key={post.id}><textarea rows="5" cols="50" value={`Order type  : ${post.TASK_NAME} \nOrder id    : ${post.POMVENDORNAME}\nPOC         : ${post.POC}\nUpdated on  : ${post.date}`} ></textarea></div>) : null)} */}


                {/* <textarea value={this.state.BANDWIDTH}></textarea><br></br> */}


                <h1></h1>
                {/* {this.state.ACCOUNT_NUMBER[0]} */}

                {/* const[{PARENT_TASK_INSTANCE_ID}]=resp
         console.console.log(PARENT_TASK_INSTANCE_ID); */}
                {/* <textarea  value={resp.taskResults[0]} onChange={this.state.searchFields}></textarea><br></br> */}
                {/* {this.state.resp.taskResults[3]} */}
                {/* <p id= 'res'></p> */}
                {/* <p id= 'productname'></p> */}
                {/* <textarea id = 'productname' value= {this.state.orderid} ></textarea> */}

                {/* <textarea value= `${ORDER_ID}`></textarea>  */}

              <button onClick={() => { this.submit() }}>TEST4</button>  <br></br> 

                {/* <button onClick={() => { this.submit()}} id ='diaorder'>DIA</button><br></br> */}

                {/* <button onClick={() => { this.submit() }}  id ='ipvpnord'>IPVPN</button><br></br> */}
                {/* <button onClick={() => { this.submit() }}  id ='wsaleuniprod'>WholesaleUNI</button><br></br> */}
                {/* <button onClick={() => { this.submit() }} id='uniprod'>UNI</button> <br></br> */}





                <div className='top'>
                    <p id='productname' className="prod" ></p>
                    <p id='orderid' className="ord"> </p>



                   
                    {/* </div>p id='diaprod' className="prod"></p>
                    <p id='diaorder' className="ord"></p>
                    <p>*******************br*****************</p>
                    <p id='ipvpnprod' className="prod"></p>
                    <p id='ipvpnord' className="ord"></p>
                    <p>*******************br*****************</p>
                    <p id='wsaleuniprod' className="prod"></p>
                    <p id='wsaleuniord' className="ord"></p>
                    <p>*******************br*****************</p>
                    <p id='uniprod' className="prod"></p>
                    <p id='uniord' className="ord"></p> */}
                </div>
              



              

            </div>
        )
    }
}


