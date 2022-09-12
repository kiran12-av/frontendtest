
import './App.css';

import Handle from './Component/EnvironmentButtons'
import HErrorBoundary from './Component/HErrorBoundary'

import Pocdetails from './Component/Pocdetails';
import Push3 from './Component/Pushapp'

import Homelinkverify from './Component/HomeLinkTest'


import Supportselect from './Component/DataFetchinGFinalSelectiontest'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div><Homelinkverify/></div> <br></br>
        <div className="flex1">
       &nbsp;&nbsp; <HErrorBoundary><Handle/></HErrorBoundary>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {/* used  <Push3/> */} <Pocdetails/> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
         
        &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  <Supportselect/>  <br></br>   

    </div>
      </header>
    </div>
  );
}

export default App;
