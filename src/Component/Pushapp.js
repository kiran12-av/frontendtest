import React from 'react'
import './Pushapp.css'

export default class Push3 extends React.Component {
    constructor() {
        super();
        this.state = {
            cuid:"",
            application_name:"",
            issue_description:""

        }

      
    }

    submit(){
        console.log(this.state)
        let url ="http://localhost:5001/api/posts/";
        let data = this.state;
        fetch (url,{
            mode: 'cors',
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })
    }

    handleChange = (e)=>{
    this.setState({application_name:e.target.value})
}  

//for status
handleChange2 = (e)=>{
    this.setState({status:e.target.value})
}  



    render() {
        return (
            <div>
             <div> &nbsp;&nbsp;&nbsp;</div> <b>  Open New ticket </b><br></br><br></br>
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
                </select><br></br>


              {/* <input type= "text" value={this.state.application_name} placeholder ="enter application name"name="body" onChange={(data)=>{this.setState({application_name:data.target.value})}}></input> */}
               <textarea  value={this.state.issue_description} placeholder ="enter description "name="body" onChange={(data)=>{this.setState({issue_description:data.target.value})}}></textarea><br></br>
            

               
         

                <button onClick={()=>{this.submit()}}>Submit</button>  <br></br>

            </div>
        )
    }
}


