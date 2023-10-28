import React from 'react';
import './App.css';
import sampleImage from './sample.jpg';  // Import the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sampleImage} alt="Sample" />  {/* Use the imported image */}
        <p>
          Hi moory :D
        </p>
      </header>
    </div>
  );
}

export default App;
