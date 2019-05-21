// import React from 'react';
// import SideBar from './sidebar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// export default function App() {
//   return (
//     <div id="App">
//       <SideBar />
//       <div id="page-wrap">
//         <h1>AppDividend</h1>
//         <h2>Check out our tutorials the side menubar</h2>
//       </div>
//     </div>
//   );
// }
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidebar';
import './App.css';
import TabContent from './components/TabContent';

class App extends Component {
  render() {
    return (
      <div id="App">
            <SideBar />
           <div id="page-wrap">
            <h1>AppDividend</h1>
            <h2>Check out our tutorials the side menubar</h2>
           </div>
           <TabContent />
      </div>
      
    );
  }
}

export default App;