import React from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'  // to have default style 
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/shift-away.css';

export default class Homelinkverify extends React.Component{
    refreshe() {
   
        window.location.reload();
 
     }
    render(){
        return(
            <div> <br></br>
                     
                    &nbsp; <img className="lumen" 
                                        src="https://assets.lumen.com/is/content/Lumen/Lumen-logo-R?Creativeid=dd032ee8-6530-4437-8e9d-209b357060ce"
                                        alt="Lumen Logo"></img><br></br><br></br>
                                   
                                        <Tippy placement = {'right'} animation='perspective' theme={'Dark'} interactive = 'true' content="Refresh the page" ><button className='btnrefrsh' onClick={() => { this.refreshe() }}>Refresh</button></Tippy>
                                       
                      
                     
            </div>
       
        )
    }
}