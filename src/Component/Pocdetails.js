// for refreshing the page and displaying the 
import React from 'react'
import './buttontesthtml.css'


import './Pushapp.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'  // to have default style 
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/shift-away.css';



export default function Pocdetails() {


  setInterval(function(){
    window.location.reload(1);
 }, 300000);


  return (
    <div> <div>
      
 
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+1.5">Teams POC Details</font> </b><br></br><br></br>
      </div>
<div> 
  <div>
    

<table class="viewtable" >
 <tr className="colheading">
    <th >App.Name</th>
    <th>QA/Lead</th> 
    <th>Distro</th> 


  </tr>
  <tr class="coldata">
 <td>Salesforce</td>
    <td>Sahu, Prachi/</td>
    <td></td>
  </tr>
  <tr className="coldata">
    <td>Swift</td>
    <td>No offshore</td>
    <td>LNS-fT-SwIFT DEV Environment</td>
  </tr>

  <tr className="coldata">
    <td>ISM</td>
    <td>Need info</td>
    <td>Need info</td>
  </tr>


  <tr className="coldata">
    <td>GCA</td>
    <td>No offshore</td>
    <td>Need info</td>
  </tr>


  <tr className="coldata">
    <td>FlightDeck</td>
    <td>Selvaganapathy/Dhananjaya,Bennur</td>
    <td></td>
  </tr>


  <tr className="coldata">
    <td>Autopilot</td>
    <td>Uday,Kiran/Madahalli chowdegowda Raju</td>
    <td>Autopilot_SUPPORT</td>
  </tr>


  
  <tr className="coldata">
    <td>ASRI</td>
    <td>Shobha R/Sapna, Hallikeri</td>
    <td>ASRI-IT-CTL-Infra-Dev-Support</td>
  </tr>


  <tr className="coldata">
    <td>Metastorm</td>
    <td>Need info</td>
    <td>Need info</td>
  </tr>


  </table>
  </div>


<br></br>
<div>
  
<div>
      
 
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><font size="+1.5">Product details</font> </b><br></br>
      </div>

<table className="viewtable5" >
 <tr className="colheading">
                            <th ></th>
                        </tr>
                        <tr class="coldata">
                            <td><Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://wiki.mef.net/display/CESG/E-Line">An E-Line is a service type defined by the MEF for connecting exactly 2 UNIs where those 2 UNIs can communicate only with one another. E-Lines are defined in MEF 6.2 and MEF 10.3.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="right"><h style={{ cursor: 'pointer' }}>ELINE EVC </h></Tippy><br></br>
                                <Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://www.google.com">This is a connection, delivered via Ethernet or private-line circuits, that isn't shared with other customers. While it typically comes at premium prices, it provides business-grade features and higher speeds than many shared-access alternatives.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="right"><h style={{ cursor: 'pointer' }}>DIA</h></Tippy><br></br>
                                <Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://wiki.mef.net/display/CESG/E-Access">An E-Access Service is an OVC-based service with at least one UNI OVC End Point and one ENNI End Point.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="right"><h style={{ cursor: 'pointer' }}>EACCESS</h></Tippy><br></br>
                                <Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://wiki.mef.net/display/CESG/E-Line">An E-Line is a service type defined by the MEF for connecting exactly 2 UNIs where those 2 UNIs can communicate only with one another. E-Lines are defined in MEF 6.2 and MEF 10.3.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="right"><h style={{ cursor: 'pointer' }}>Monarch Eline EVC</h></Tippy></td>
                        </tr>
                    </table>
   </div>
 </div>
 </div>             
            
  )
}



