import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      < Header />

      {/* App body */}
      <div className = "app__body">
        {/* Side bar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />

      </div>

    </div>
  );
}

export default App;
