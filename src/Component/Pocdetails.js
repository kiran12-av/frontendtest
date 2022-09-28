// for refreshing the page and displaying the 
import React from 'react'
import './buttontesthtml.css'

export default function Pocdetails() {


  setInterval(function(){
    window.location.reload(1);
 }, 300000);


  return (
    <div> <div>
      
 
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+1.5">Teams POC Details</font> </b><br></br><br></br>
      </div>
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

    </div>
  )
}



