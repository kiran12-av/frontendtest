import React from 'react';
import ReactDOM from 'react-dom';

import './Pushapp.css'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'  // to have default style 
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/shift-away.css';


export default class Prodinfo extends React.Component {
    constructor() {
        super();
           }

    render() {
        return (

            <div>

<div>
      
 
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+1.5">Products list</font> </b><br></br><br></br>
      </div>
            
              
                <div>
                    <table class="viewtable" >
                        <tr className="colheading">
                            <th >Producttypes</th>
                        </tr>
                        <tr class="coldata">
                            <td><Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://wiki.mef.net/display/CESG/E-Line">An E-Line is a service type defined by the MEF for connecting exactly 2 UNIs where those 2 UNIs can communicate only with one another. E-Lines are defined in MEF 6.2 and MEF 10.3.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h style={{ cursor: 'pointer' }}>ELINE EVC </h></Tippy><br></br>
                                <Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://www.google.com">This is a connection, delivered via Ethernet or private-line circuits, that isn't shared with other customers. While it typically comes at premium prices, it provides business-grade features and higher speeds than many shared-access alternatives.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h style={{ cursor: 'pointer' }}>DIA</h></Tippy><br></br>
                                <Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://wiki.mef.net/display/CESG/E-Access">An E-Access Service is an OVC-based service with at least one UNI OVC End Point and one ENNI End Point.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h style={{ cursor: 'pointer' }}>EACCESS</h></Tippy><br></br>
                                <Tippy content={<a target='_blank' style={{ color: 'white', 'text-decoration': 'none' }} href="https://wiki.mef.net/display/CESG/E-Line">An E-Line is a service type defined by the MEF for connecting exactly 2 UNIs where those 2 UNIs can communicate only with one another. E-Lines are defined in MEF 6.2 and MEF 10.3.<br></br> <br></br>Click here for more info.</a>} interactive="perspective" placement="left"><h style={{ cursor: 'pointer' }}>Monarch</h></Tippy></td>
                        </tr>
                    </table>
                </div>

            </div>
        )
    }
}


