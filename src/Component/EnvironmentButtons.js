import './buttontesthtml.css'

import React, { useState } from 'react'
import { Button } from 'react-bootstrap';



import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'  // to have default style 
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/shift-away.css';

var http = require('http');
//var http=require.resolve("stream-http");

export default function Handle() {
    const [data, setData] = useState("secondary")
    const [data1, setData1] = useState("secondary")
    const [data2, setData2] = useState("secondary")
    const [data3, setData3] = useState("secondary")

    const [data4, setData4] = useState("secondary")
    const [data5, setData5] = useState("secondary")
    const [data6, setData6] = useState("secondary")
    const [data7, setData7] = useState("secondary")

    // GCA
    const [data8, setData8] = useState("secondary")
    const [data9, setData9] = useState("secondary")
    const [data10, setData10] = useState("secondary")
    const [data11, setData11] = useState("secondary")


    //FD
    // GCA
    const [data12, setData12] = useState("secondary")
    const [data13, setData13] = useState("secondary")
    const [data14, setData14] = useState("secondary")
    const [data15, setData15] = useState("secondary")

    // Autopilot
    const [data16, setData16] = useState("secondary")
    const [data17, setData17] = useState("secondary")
    const [data18, setData18] = useState("secondary")
    const [data19, setData19] = useState("secondary")



    // ASRI
    const [data20, setData20] = useState("secondary")
    const [data21, setData21] = useState("secondary")
    const [data22, setData22] = useState("secondary")
    const [data23, setData23] = useState("secondary")


    // Metastorm
    const [data24, setData24] = useState("secondary")
    const [data25, setData25] = useState("secondary")
    const [data26, setData26] = useState("secondary")
    const [data27, setData27] = useState("secondary")


    function primarystatus() {
        setData("primary");
    }
    function secondarystatus() {
        setData("secondary");
    }



    function primarystatus1() {
        setData1("primary");
    }
    function secondarystatus1() {
        setData1("secondary");
    }

    function primarystatus2() {
        setData2("primary");
    }
    function secondarystatus2() {
        setData2("secondary");
    }


    function primarystatus3() {
        setData3("primary");
    }
    function secondarystatus3() {
        setData3("secondary");
    }



    function primarystatus4() {
        setData4("primary");
    }
    function secondarystatus4() {
        setData4("secondary");
    }


    function primarystatus5() {
        setData5("primary");
    }
    function secondarystatus5() {
        setData5("secondary");
    }



    function primarystatus6() {
        setData6("primary");
    }
    function secondarystatus6() {
        setData6("secondary");
    }


    function primarystatus7() {
        setData7("primary");
    }
    function secondarystatus7() {
        setData7("secondary");
    }


    function primarystatus8() {
        setData8("primary");
    }
    function secondarystatus8() {
        setData8("secondary");
    }


    function primarystatus9() {
        setData9("primary");
    }
    function secondarystatus9() {
        setData9("secondary");
    }

    function primarystatus10() {
        setData10("primary");
    }
    function secondarystatus10() {
        setData10("secondary");
    }


    function primarystatus11() {
        setData11("primary");
    }
    function secondarystatus11() {
        setData11("secondary");
    }


    function primarystatus12() {
        setData12("primary");
    }
    function secondarystatus12() {
        setData12("secondary");
    }




    function primarystatus13() {
        setData13("primary");
    }
    function secondarystatus13() {
        setData13("secondary");
    }
    function primarystatus14() {
        setData14("primary");
    }
    function secondarystatus14() {
        setData14("secondary");
    }
    function primarystatus15() {
        setData15("primary");
    }
    function secondarystatus15() {
        setData15("secondary");
    }



    function primarystatus16() {
        setData16("primary");
    }
    function secondarystatus16() {
        setData16("secondary");
    }
    function primarystatus17() {
        setData17("primary");
    }
    function secondarystatus17() {
        setData17("secondary");
    }


    function primarystatus18() {
        setData18("primary");
    }
    function secondarystatus18() {
        setData18("secondary");
    }



    function primarystatus19() {
        setData19("primary");
    }
    function secondarystatus19() {
        setData19("secondary");
    }



    // asri 

    
    function primarystatus20() {
        setData20("primary");
    }
    function secondarystatus20() {
        setData20("secondary");
    }


    
    function primarystatus21() {
        setData21("primary");
    }
    function secondarystatus21() {
        setData21("secondary");
    }

    
    function primarystatus22() {
        setData22("primary");
    }
    function secondarystatus22() {
        setData22("secondary");
    }
    
    function primarystatus23() {
        setData23("primary");
    }
    function secondarystatus23() {
        setData23("secondary");
    }

//Metastorm 
function primarystatus24() {
    setData24("primary");
}
function secondarystatus24() {
    setData24("secondary");
}

function primarystatus25() {
    setData25("primary");
}
function secondarystatus25() {
    setData25("secondary");
}

function primarystatus26() {
    setData26("primary");
}
function secondarystatus26() {
    setData26("secondary");
}


function primarystatus27() {
    setData27("primary");
}
function secondarystatus27() {
    setData27("secondary");
}

    

    let a = ["https://lumn--itv1.my.salesforce.com/", "https://lumn--itv2.my.salesforce.com/", "https://lumn--itv3.my.salesforce.com/", "https://lumn--e2e.my.salesforce.com/?ec=302&startURL=%2Fhome%2Fhome.jsp"]
    for (let i = 0; i <= 3; i++) {

        http.get(a[i], function (res) {
            if (i === 0) {
                let data = res.statusCode === 200 ? primarystatus() : secondarystatus()
            }

            if (i === 1) {
                let data1 = res.statusCode === 200 ? primarystatus1() : secondarystatus1()
            }
            if (i === 2) {
                let data2 = res.statusCode === 200 ? primarystatus2() : secondarystatus2()
            }
            if (i === 3) {
                let data3 = res.statusCode === 200 ? primarystatus3() : secondarystatus3()
            }

         }
        
            
        )

    }


    // Swift 
    let b = ["http://swiftenv1/", "http://swiftenv2/", "http://swiftenv3/", "http://swiftenv4/"]
    for (let i = 0; i <= 3; i++) {

        http.get(b[i], function (res) {
            if (i === 0) {
                let data4 = res.statusCode === 200 ? primarystatus4() : secondarystatus4()
            }

            if (i === 1) {
                let data5 = res.statusCode === 200 ? primarystatus5() : secondarystatus5()
            }
            if (i === 2) {
                let data6 = res.statusCode === 200 ? primarystatus6() : secondarystatus6()
            }
            if (i === 3) {
                let data7 = res.statusCode === 200 ? primarystatus7() : secondarystatus7()
            }

        

        })

    }

    //BPMS

    let c = ["//revenueservicetest/WebUI/ENV1/RevenueCreditAuthWeb/Order/List", "//revenueservicetest/WebUI/ENV2/RevenueCreditAuthWeb/Order/List", "//revenueservicetest/WebUI/ENV3/RevenueCreditAuthWeb/Order/List", "//revenueservicetest/WebUI/ENV4/RevenueCreditAuthWeb/Order/List"]
    for (let i = 0; i <= 3; i++) {

        http.get(c[i], function (res) {
            if (i === 0) {
                let data9 = res.statusCode === 200 ? primarystatus8() : secondarystatus8()
            }

            if (i === 1) {
                let data9 = res.statusCode === 200 ? primarystatus9() : secondarystatus9()
            }
            if (i === 2) {
                let data10 = res.statusCode === 200 ? primarystatus10() : secondarystatus10()
            }
            if (i === 3) {
                let data11 = res.statusCode === 200 ? primarystatus11() : secondarystatus11()
            }

     

        })

    }


    let d = ["https://flightdeck-ui-test1.kubeodc-test.corp.intranet/#/auth/login", "https://flightdeck-ui-test2.kubeodc-test.corp.intranet/#/auth/login", "https://flightdeck-ui-test3.kubeodc-test.corp.intranet/#/auth/login", "https://flightdeck-ui-test4.kubeodc-test.corp.intranet/#/auth/login"]
    for (let i = 0; i <= 3; i++) {

        http.get(d[i], function (res) {
            if (i === 0) {
                let data12 = res.statusCode === 200 ? primarystatus12() : secondarystatus12()
            }

            if (i === 1) {
                let data13 = res.statusCode === 200 ? primarystatus13() : secondarystatus13()
            }
            if (i === 2) {
                let data14 = res.statusCode === 200 ? primarystatus14() : secondarystatus14()
            }
            if (i === 3) {
                let data15 = res.statusCode === 200 ? primarystatus15() : secondarystatus15()
            }

      

        })

    }


//AP
    let e = ["https://autopilotapp-test1-01.test.intranet:3443/login", "https://autopilotapp-test2-01.test.intranet:3443/login", "https://autopilotapp-test2-01.test.intranet:3443/login", "https://autopilotapp-test4-01.test.intranet:3443/login"]
    for (let i = 0; i <= 3; i++) {

        http.get(e[i], function (res) {
            if (i === 0) {
                let data16 = res.statusCode === 200 ? primarystatus16() : secondarystatus16()
            }

            if (i === 1) {
                let data17 = res.statusCode === 200 ? primarystatus17() : secondarystatus17()
            }
            if (i === 2) {
                let data18 = res.statusCode === 200 ? primarystatus18() : secondarystatus18()
            }
            if (i === 3) {
                let data19 = res.statusCode === 200 ? primarystatus19() : secondarystatus19()
            }

   

        })

    }




    // ASRI 

    let f = ["//amd01adc-uat.adc1.level3.com:20100/AmdocsOSS/Portal/login.html", "//amd03adc-uat.adc1.level3.com:20300/AmdocsOSS/Portal/login.html", "//amd03adc-uat.adc1.level3.com:20300/AmdocsOSS/Portal/login.html", "//amd07adc-uat.adc1.level3.com:20700/AmdocsOSS/Portal/login.html"]
    for (let i = 0; i <= 3; i++) {

        http.get(f[i], function (res) {
            if (i === 0) {
                let data20 = res.statusCode === 200 ? primarystatus20() : secondarystatus20()
            }

            if (i === 1) {
                let data21 = res.statusCode === 200 ? primarystatus21() : secondarystatus21()
            }
            if (i === 2) {
                let data22 = res.statusCode === 200 ? primarystatus22() : secondarystatus22()
            }
            if (i === 3) {
                let data23 = res.statusCode === 200 ? primarystatus23() : secondarystatus23()
            }

     

        })

    }



   // Metastorm 

   let g = ["//mbpm-env1.level3.com/metastormsso/Default.aspx", "//mbpm-env2.level3.com/metastormsso/Default.aspx", "//mbpm-env3.level3.com/metastormsso/Default.aspx", "//mbpm-env4.level3.com/metastormsso/Default.aspx"]
   for (let i = 0; i <= 3; i++) {

       http.get(g[i], function (res) {
           if (i === 0) {
               let data24 = res.statusCode === 200 ? primarystatus24() : secondarystatus24()
           }

           if (i === 1) {
               let data25 = res.statusCode === 200 ? primarystatus25() : secondarystatus25()
           }
           if (i === 2) {
               let data26 = res.statusCode === 200 ? primarystatus26() : secondarystatus26()
           }
           if (i === 3) {
               let data27 = res.statusCode === 200 ? primarystatus27() : secondarystatus27()
           }

  

       })

   }


    return (
        <div>
            <div>
      
 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><font size="+1.5">   Environment status</font> </b><br></br><br></br>
      </div >

  
      <div id="alleft">
      <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="The application is integrated with many back-end systems to support Customer Relationship Management, Customer Accounts, Sales leads, Sales Opportunities, Service Location qualification, Quotes, Orders, Billing inquiries and Payment management."><t>Salesforce</t></Tippy>&nbsp;&nbsp;&nbsp;
                            <a href="https://lumn--itv1.my.salesforce.com/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST1 "><button id="custbtn" text='submit' className={data}  >TEST1</button></Tippy></a>&nbsp;
                            <a href="https://lumn--itv2.my.salesforce.com/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST2 "><button id="custbtn" text='submit' className={data1}  >TEST2 </button></Tippy></a> &nbsp;
                            <a href="https://lumn--itv3.my.salesforce.com/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST3 "><button id="custbtn" text='submit' className={data2}  >TEST3 </button></Tippy></a>&nbsp;
                            <a href="https://lumn--e2e.my.salesforce.com/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST4 "><button id="custbtn" text='submit' className={data3}  >TEST4 </button></Tippy><br></br> </a>
                            </div>
              
                            <div id="alleft">
                            <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="Tracks order package journey from request to an actual order, System to link order processing from Sales through Service activation and Billing."><t>Swift</t></Tippy>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* <p> Swift &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                            <a href="http://swiftenv1/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST1 "><button id="custbtn" text='submit' className={data4}   >TEST1</button></Tippy></a>&nbsp;&nbsp;
                            <a href="http://swiftenv2/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST2 "><button id="custbtn" text='submit' className={data5}   >TEST2</button></Tippy></a>&nbsp;&nbsp;
                            <a href="http://swiftenv3/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST3 "><button id="custbtn" text='submit' className={data6}   >TEST3</button></Tippy></a>&nbsp;
                            <a href="http://swiftenv4/" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST4 "><button id="custbtn" text='submit' className={data7}   >TEST4</button></Tippy><br></br></a>
                            </div>


                           <div id="alleft">
                           {/* <p> GCA   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                           <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="Global Credit Authority for approving the orders."><t>GCA </t></Tippy>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="//revenueservicetest/WebUI/ENV1/RevenueCreditAuthWeb/Order/List" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST1 "><button id="custbtn" text='submit' className={data8}   >TEST1</button></Tippy></a>&nbsp;&nbsp;
                            <a href="//revenueservicetest/WebUI/ENV2/RevenueCreditAuthWeb/Order/List" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST2 "><button id="custbtn" text='submit' className={data9}   >TEST2</button></Tippy></a>&nbsp;&nbsp;
                            <a href="//revenueservicetest/WebUI/ENV3/RevenueCreditAuthWeb/Order/List" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST3 "><button id="custbtn" text='submit' className={data10}   >TEST3</button></Tippy></a>&nbsp;
                            <a href="//revenueservicetest/WebUI/ENV4/RevenueCreditAuthWeb/Order/List" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST4 "><button id="custbtn" text='submit' className={data11}   >TEST4</button></Tippy><br></br></a>
               
                            </div>


                        <div id="alleft">
                            {/* <p>FD   &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; */}
                            <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="Flightdeck Control center for Common Work Management which provides visibility to Federated Orchestration as well as ability to launch and manage tasks, view statistics and dashboards for work management.."><t>FD</t></Tippy>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://flightdeck-ui-test1.kubeodc-test.corp.intranet/#/auth/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST1 "><button id="custbtn" text='submit' className={data12}>TEST1</button></Tippy></a>&nbsp;&nbsp;                            
                            <a href="https://flightdeck-ui-test2.kubeodc-test.corp.intranet/#/auth/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST2 "><button id="custbtn" text='submit' className={data13}>TEST2</button></Tippy></a>&nbsp;&nbsp;
                            <a href="https://flightdeck-ui-test3.kubeodc-test.corp.intranet/#/auth/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST3 "><button id="custbtn" text='submit' className={data14}>TEST3</button></Tippy></a>&nbsp;
                            <a href="https://flightdeck-ui-test4.kubeodc-test.corp.intranet/#/auth/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST4 "><button id="custbtn" text='submit' className={data15}>TEST4</button></Tippy><br></br></a>
                             </div>


                        <div id="alleft">
                            {/* Autopilot&nbsp;&nbsp;&nbsp;&nbsp; */}
                            <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="Autopilot is an orchestration tool which will help reduce order intervals and improve manual processing by performing data enrichment and executing orders across the multiple ecosystems."><t>Autopilot</t></Tippy>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://autopilotapp-test1-01.test.intranet:3443/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST1 "><button id="custbtn" text='submit' className={data16}>TEST1</button></Tippy></a>&nbsp;&nbsp;
                            <a href="https://autopilotapp-test2-01.test.intranet:3443/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST2 "><button id="custbtn" text='submit' className={data17}>TEST2</button></Tippy></a>&nbsp;&nbsp;
                            <a href="https://autopilotapp-test3-01.test.intranet:3443/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST3 "><button id="custbtn" text='submit' className={data18}>TEST3</button></Tippy></a>&nbsp;
                            <a href="https://autopilotapp-test4-01.test.intranet:3443/login" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST4 "><button id="custbtn" text='submit' className={data19}>TEST4</button></Tippy><br></br></a>
                        </div>


                        <div id="alleft">
                            {/* <p>ASRI &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                            <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="The Adaptive Service Resource Inventory which Receives Product OrdersOrchestrate the Order based on the catalog-based Product to CFS relationships. Collect the Customer Facing Service (CFS) attributes  if required Design the CFS by Assigning Resource Facing Services (RFSs) linked to specific Resources in the network Inventory the CFSs, RFSs & the Resources they consume. Provide the Activation details to SAO fulfillment suite."><t>ASRI</t></Tippy>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="//amd01adc-uat.adc1.level3.com:20100/AmdocsOSS/Portal/login.html" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST1 "><button id="custbtn" text='submit' className={data20}>TEST1</button></Tippy></a>&nbsp;&nbsp;
                            <a href="//amd03adc-uat.adc1.level3.com:20100/AmdocsOSS/Portal/login.html" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST2 "><button id="custbtn" text='submit' className={data21}>TEST2</button></Tippy></a>&nbsp;&nbsp;
                            <a href="//amd05adc-uat.adc1.level3.com:20100/AmdocsOSS/Portal/login.html" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST3 "><button id="custbtn" text='submit' className={data22}>TEST3</button></Tippy></a>&nbsp;
                            <a href="//amd07adc-uat.adc1.level3.com:20100/AmdocsOSS/Portal/login.html" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST4 "><button id="custbtn" text='submit' className={data23}>TEST4</button></Tippy><br></br></a>
                            </div>

                        <div id="alleft">
                            {/* <p></p>Metastorm  &nbsp; */}
                            <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="Workflow and business process engine which supports SwIFT and related processes."><t>Metastorm</t></Tippy>&nbsp;&nbsp;
                            <a href="//mbpm-env1.level3.com/metastormsso/Default.aspx" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST1 "><button id="custbtn" text='submit' className={data24}>TEST1</button></Tippy></a>&nbsp;&nbsp;
                            <a href="//mbpm-env3.level3.com/metastormsso/Default.aspx" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST2 "><button id="custbtn" text='submit' className={data25}>TEST2</button></Tippy></a>&nbsp;&nbsp;
                            <a href="//mbpm-env3.level3.com/metastormsso/Default.aspx" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST3 "><button id="custbtn" text='submit' className={data26}>TEST3</button></Tippy></a>&nbsp;
                            <a href="//mbpm-env4.level3.com/metastormsso/Default.aspx" target="_blank"><Tippy delay= {200} placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="TEST4 "><button id="custbtn" text='submit' className={data27}>TEST4</button></Tippy><br></br></a>
                        </div>

                    </div>
         
    )

}

