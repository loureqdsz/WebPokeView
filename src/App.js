import { useEffect, useState } from 'react';
import { Header } from './components/header/index.js';
import { TextBox } from './components/textBox/index.js';
import { PaginationTable } from './components/pagination/index.js';
import { PokemonList } from './components/list/index.js';
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
        <div className="Text-Box-div">
          <TextBox id="search-text-box" value={textBoxValue} onChange={setTextBoxValue}/>  
        </div>        
        <div className="App-Content-2">
          <PokemonList />
        </div>
        <div className="App-Content-3">          
          <PaginationTable id="table-pagination" count="100"/>
        </div>
      </div>
    </div>
  );
}

export default App;
