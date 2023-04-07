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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons])

  useEffect(() => {
    handleSearch(searchedValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedValue])

  useEffect(() => {
    if (pokemons.length > 0) {
        const initialPart = (page === 1) ? 0 : (page*10)
        const finalPart = initialPart + 10
        setInitialPart(initialPart)
        setFinalPart(finalPart)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    const subset = pokemons.slice(initialPart, finalPart)
    setSubsetPokeList(subset)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPart, finalPart])
  // ---------------- Handle Functions ------------------------------

  const handleSearch = (value) => {
    if (!value) {
        const subset = pokemons.slice(initialPart, finalPart)
        setSubsetPokeList(subset)
        return
    }

    const pokemonFullList = pokemons.slice(initialPart, finalPart)
    // eslint-disable-next-line array-callback-return
    const newSubset = []
    
    // eslint-disable-next-line array-callback-return
    pokemonFullList.map((pokemon) => {
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
