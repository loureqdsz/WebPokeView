import { useEffect, useState } from 'react';
import { Header } from './components/header/index.js';
import { TextBox } from './components/textBox/index.js';
import './App.css';

function App() {
  const [textBoxValue, setTextBoxValue] = useState("")

  useEffect(() => {
    console.log('Value -> ', textBoxValue)
  }, [textBoxValue])

  return (
    <div className="App">
      <Header />
      <div className="App-Content">
        <div className="App-Content-2">
          <div className="App-Content-3">
            <TextBox id="search-text-box" value={textBoxValue} onChange={setTextBoxValue}/>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
