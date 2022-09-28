import React from 'react';
import ReactDOM from 'react-dom';

import './Pushapp.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'  // to have default style 
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/shift-away.css';


export default class APIPush1 extends React.Component {
    constructor() {
        super();
        this.state = { "searchFields": [{ "fieldName": "isSystemTask", "value": ["Yes"], "operator": "IN", "tableName": "task_type_sys_param", "isDateCriteria": false }, { "fieldName": "CREATED_DTTM", "value": ["2022-09-15", "2022-09-25"], "operator": "between", "tableName": "task_instance", "isDateCriteria": true }, { "fieldName": "TASK_NAME", "value": ["ASR Request"], "operator": "IN", "tableName": "TASK_TYPE", "isDateCriteria": false }] }
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
        this.state.application_name = ''
        this.state.Environment=''
        this.state.A_END_CLLI=''
        this.state.Z_END_CLLI=''
        this.state.NETWORKSTATUS=''

    }


    submit2() {

        var Environment ="Test2 Environment orders"
        document.getElementById('Environmentname').innerHTML = Environment

        console.log(this.state)
        let url = "https://workmate-svc-test2.kubeodc-test.corp.intranet/RestService/Enterprise/v4/Work/task/advancedSearch?include=p,aa";
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
                const { PRODUCTNAME, ORDER_ID,SERVICE_SITEIS,SERVICE_ACLLI, SERVICE_ZCLLI } = resp.taskResults
                document.getElementById('productname').innerHTML = '';
                document.getElementById('orderid').innerHTML = '';
                document.getElementById('NWKSTAT').innerHTML = '';
                document.getElementById('AEND').innerHTML = '';
                document.getElementById('ZEND').innerHTML = '';
                this.state.PRODUCTDATA = ''
                this.state.ORDERDATA = ''
                this.state.A_END_CLLI=''
                this.state.Z_END_CLLI=''
                this.state.NETWORKSTATUS=''

                let resptaskresults = resp.taskResults.map(({ PRODUCTNAME, ORDER_ID, SERVICE_SITEIS, SERVICE_ACLLI, SERVICE_ZCLLI }) => {

                    // working fine section
                    this.state.ORDERDATA += ORDER_ID + `<br></br>`
                    this.state.PRODUCTDATA += PRODUCTNAME + `<br></br>`
                    this.state.A_END_CLLI += SERVICE_ACLLI + `<br></br>`
                    this.state.Z_END_CLLI += SERVICE_ZCLLI + `<br></br>`
                    this.state.NETWORKSTATUS += SERVICE_SITEIS + `<br></br>`

                    console.log(this.state.ORDERDATA)
                    console.log(this.state.PRODUCTDATA)
                    document.getElementById('productname').innerHTML = this.state.PRODUCTDATA
                    document.getElementById('orderid').innerHTML = this.state.ORDERDATA
                    document.getElementById('NWKSTAT').innerHTML = this.state.NETWORKSTATUS
                    document.getElementById('AEND').innerHTML = this.state.A_END_CLLI
                    document.getElementById('ZEND').innerHTML = this.state.Z_END_CLLI

                })

                console.log(resp.taskResults)
                console.log(resp.taskResults.length)

            })


        })


    }



    submit4() {

        var Environment ="Test4 Environment orders"
        document.getElementById('Environmentname').innerHTML = Environment

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
                const { PRODUCTNAME, ORDER_ID,SERVICE_SITEIS,SERVICE_ACLLI, SERVICE_ZCLLI } = resp.taskResults
                document.getElementById('productname').innerHTML = '';
                document.getElementById('orderid').innerHTML = '';
                document.getElementById('NWKSTAT').innerHTML = '';
                document.getElementById('AEND').innerHTML = '';
                document.getElementById('ZEND').innerHTML = '';
                this.state.PRODUCTDATA = ''
                this.state.ORDERDATA = ''
                this.state.A_END_CLLI=''
                this.state.Z_END_CLLI=''
                this.state.NETWORKSTATUS=''

                let resptaskresults = resp.taskResults.map(({ PRODUCTNAME, ORDER_ID, SERVICE_SITEIS, SERVICE_ACLLI, SERVICE_ZCLLI }) => {

                    // working fine section
                    this.state.ORDERDATA += ORDER_ID + `<br></br>`
                    this.state.PRODUCTDATA += PRODUCTNAME + `<br></br>`
                    this.state.A_END_CLLI += SERVICE_ACLLI + `<br></br>`
                    this.state.Z_END_CLLI += SERVICE_ZCLLI + `<br></br>`
                    this.state.NETWORKSTATUS += SERVICE_SITEIS + `<br></br>`

                    console.log(this.state.ORDERDATA)
                    console.log(this.state.PRODUCTDATA)
                    document.getElementById('productname').innerHTML = this.state.PRODUCTDATA
                    document.getElementById('orderid').innerHTML = this.state.ORDERDATA
                    document.getElementById('NWKSTAT').innerHTML = this.state.NETWORKSTATUS
                    document.getElementById('AEND').innerHTML = this.state.A_END_CLLI
                    document.getElementById('ZEND').innerHTML = this.state.Z_END_CLLI

                })

                console.log(resp.taskResults)
                console.log(resp.taskResults.length)

            })


        })

    }




    cleardata() {
        document.getElementById('productname').innerHTML = '';
        document.getElementById('orderid').innerHTML = '';
        this.state.PRODUCTDATA = ''
        this.state.ORDERDATA = ''
    }













    render() {


        return (

            <div>



<b><t>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+1.5">Fetch Test Orders </font></t></b>

               
              

                <div >
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* not required as  <Tippy placement={'right'} animation='perspective' theme={'Dark'} interactive='true' content="Erase the data" ><button className='btnclr' onClick={() => { this.cleardata() }}><b>Clear</b></button></Tippy> */}
                    <Tippy placement={'right'} animation='perspective' theme={'Dark'} interactive='true' content="Fetch Test1 Env data"><button className='btndesign' onClick={() => { this.submit1() }}><b>TEST1</b></button></Tippy>
                    <Tippy placement={'right'} animation='perspective' theme={'Dark'} interactive='true' content="Fetch Test2 Env data"><button className='btndesign' onClick={() => { this.submit2() }}><b>TEST2</b></button></Tippy>
                    <Tippy placement={'right'} animation='perspective' theme={'Dark'} interactive='true' content="Fetch Test4 Env data"><button className='btndesign' onClick={() => { this.submit4() }}><b>TEST4</b></button></Tippy>
                    <Tippy placement={'right'} animation='perspective' theme={'Dark'} interactive='true' content="Fetch Production data"><button className='btndesign' onClick={() => { }}><b>PROD</b></button></Tippy> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                   
       
                    <b>&nbsp;&nbsp;<p id='Environmentname'></p></b>
                        <table class="viewtable">
                      
                            <tr className="colheading">
                                <th>Product</th>
                               <th>Swift Order Package Id</th>
                               <th>Network</th>
                               <th>A-END CLLI</th>
                               <th>Z-END CLLI</th>
                            </tr>
                            <tr class="coldata">
                                <td>    <p id='productname' className="prod" ></p></td>
                                <td>   <p id='orderid' className="ord"> </p></td>
                                <td>   <p id='NWKSTAT' className="ord"> </p></td>
                                <td>   <p id='AEND' className="ord"> </p></td>
                                <td>   <p id='ZEND' className="ord"> </p></td>
                            </tr>
                        </table>
           

                </div>

           
            </div>
        )
    }
}


