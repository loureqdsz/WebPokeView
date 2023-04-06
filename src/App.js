import { useEffect, useState } from 'react';
import { Header } from './components/header/index.js';
import { TextBox } from './components/textBox/index.js';
import { PaginationTable } from './components/pagination/index.js';
import { PokemonList } from './components/list/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { AddPokemonsAction } from './config/redux/actions/PokeActions.js';
import { POKE_API_URL } from './config/config.js'
import './App.css';

function App() {
  const [textBoxValue, setTextBoxValue] = useState("")

  const dispatch = useDispatch()
  const Pokemons = useSelector((state) => state.Pokemons)
  const { pokemons } = Pokemons

  useEffect(() => {
    if (pokemons.length === 0) {
      fetch(
        POKE_API_URL + 'pokemon?limit=100000&offset=0', {
            method: 'GET'
        }
      ).then((res) => {
          if (res.status) {
              return res.json()
          }
      }).then((data) => {
          if (!data || data.error) {
              console.log('Ocorreu um erro na request')
              return
          }
          const pokemonsList = data.results
          pokemonsList.map((value, index) => {
            return dispatch(AddPokemonsAction({ id: index, ...value}))
          })
      })
    } else {
      console.log('Dados Carregados')
    }
  })

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
