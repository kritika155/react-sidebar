import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideBar from './sidebar';
import './App.css';
import TabContent from './components/TabContent';

class App extends Component {
  state = {
    isMJ: false,
    isJB: false,
    isDrake: false
  };

  toggleChangeMJ = () => {
    this.setState(prevState => ({
      isMJ: !prevState.isMJ,
    }));
  }

  toggleChangeJB = () => {
    this.setState(prevState => ({
      isJB: !prevState.isJB,
    }));
  }

  toggleChangeDrake = () => {
    this.setState(prevState => ({
      isDrake: !prevState.isDrake,
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div id="App">
            <SideBar />
           <div id="page-wrap">
            <h1>AppDividend</h1>
            <h2>Check out the side menubar</h2>
           </div>
           <TabContent />
           <div className="container">
        <h2>Save the multiple checkbox values in React js</h2>
        <hr />
        <form onSubmit = {this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isMJ}
                onChange={this.toggleChangeMJ}
                className="form-check-input"
              />
              MJ
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isJB}
                onChange={this.toggleChangeJB}
                className="form-check-input"
              />
              JB
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isDrake}
                onChange={this.toggleChangeDrake}
                className="form-check-input"
              />
              Drake
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
      
    );
  }
}

export default App;