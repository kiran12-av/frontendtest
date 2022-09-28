import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Handle from './Component/EnvironmentButtons'
import HErrorBoundary from './Component/HErrorBoundary'

import Pocdetails from './Component/Pocdetails';
import Push3 from './Component/Pushapp'

import Homelinkverify from './Component/HomeLinkTest'
import APIPush4 from './Component/APITEST4Search'
import APIPush2 from './Component/APITEST2Search'
import APIPush1 from './Component/APITEST1Search'
import Prodinfo from './Component/Producttypesinfo'
import Daterangepickerfn from './Component/Daterangepicker';

import Supportselect from './Component/DataFetchinGFinalSelectiontest'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div><Homelinkverify/></div> <br></br>
        <div className="flex1">
      &nbsp;&nbsp; <HErrorBoundary><Handle/></HErrorBoundary>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  <Pocdetails/> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  {/*  <Supportselect/>*/}  <APIPush1/>
        {/* <br></br><Prodinfo/><APIPush2/>
       <br></br><APIPush4/>   <Push3/>  */}

    </div>
      </header>
    </div>
  );
}

export default App;
