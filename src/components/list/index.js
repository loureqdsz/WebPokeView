/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { List } from '@mui/material';
import { PokemonItem } from '../itemList/index.js';
import './list.css';
import { useSelector } from 'react-redux';


const PokemonList = ({ searchedValue, page }) => {
  const Pokemons = useSelector((state) => state.Pokemons)
  const { pokemons } = Pokemons

  const [subsetPokeList, setSubsetPokeList] = useState(null)
  const [initialPart, setInitialPart] = useState(1)
  const [finalPart, setFinalPart] = useState(1)

  // ----------- Initializing component ------------------------

  useEffect(() => {
      if (pokemons.length > 0) {
          const subset = pokemons.slice(0, 10)
          setSubsetPokeList(subset)
      }
  }, [pokemons])

  useEffect(() => {
    handleSearch(searchedValue)
  }, [searchedValue])

  useEffect(() => {
    if (pokemons.length > 0) {
        const initialPart = (page === 1) ? 0 : (page*10)
        const finalPart = initialPart + 10
        setInitialPart(initialPart)
        setFinalPart(finalPart)
    }
  }, [page])

  useEffect(() => {
    const subset = pokemons.slice(initialPart, finalPart)
    setSubsetPokeList(subset)
  }, [initialPart, finalPart])
  // ---------------- Handle Functions ------------------------------

  const handleSearch = (value) => {
    if (!value) {
        const subset = pokemons.slice(initialPart, finalPart)
        setSubsetPokeList(subset)
        return
    }

    const pokemonFullList = pokemons.slice(initialPart, finalPart)
    const newSubset = []
    
    pokemonFullList.forEach((pokemon) => {
        if (pokemon?.name.includes(value)) {
            newSubset.push(pokemon)
        }
    })
    setSubsetPokeList(newSubset)
  }

  // ----------------------------------------------------------------

  return (
    <div className='List-box'> 
        <List 
            dense={true}
            sx={{
                'max-height: ': '10%',
                overflow: 'auto'
            }}>
            {
                subsetPokeList && subsetPokeList.map((item, index) => {
                    return <PokemonItem key={item?.id} itemIndex={index} item={item}/>
                })
            }
        </List>       
    </div>
  );
}

export { PokemonList };
