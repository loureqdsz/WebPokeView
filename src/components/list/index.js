import { useEffect, useState } from 'react';
import { List } from '@mui/material';
import { PokemonItem } from '../itemList/index.js';
import './list.css';
import { useDispatch, useSelector } from 'react-redux';


const PokemonList = () => {
    const Pokemons = useSelector((state) => state.Pokemons)
    const { pokemons } = Pokemons

    const [subsetPokeList, setSubsetPokeList] = useState(null)

    useEffect(() => {
        if (pokemons.length > 0) {
            const subset = pokemons.slice(0, 10)
            setSubsetPokeList(subset)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemons])

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
                    return <PokemonItem key={item.id} itemIndex={index} item={item}/>
                })
            }
        </List>       
    </div>
  );
}

export { PokemonList };
