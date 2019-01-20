import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="text-center">
            <h2>CRA v2 <span className="fab fb-github fa-2x"></span> with <span className="text-secondary">scss</span></h2>
          </div>
        </div>
        <footer className="footer">
          <div className="text-center">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
