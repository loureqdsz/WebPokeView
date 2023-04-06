import { useEffect, useState } from 'react';
import { List } from '@mui/material'
import { PokemonItem } from '../itemList/index.js'
import './list.css';
import { useDispatch, useSelector } from 'react-redux';


const PokemonList = () => {
    const dispatch = useDispatch()
    const Pokemons = useSelector((state) => state.Pokemons)
    const { pokemons } = Pokemons

    // const [subsetPokeList, setSubsetPokeList] = useState({})

    // useEffect(() => {
    //     if (pokemons.length > 0) {
    //         pokemonsSubSet = pokemons.slice(0, 10)
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, pokemons)

    // useEffect(() => {
    //     console.log('Subset menor da lista -> ')
    //     console.log(subsetPokeList)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, subsetPokeList)

  useEffect(() => {
    console.log('Entrei na lista')
  })

  return (
    <div className='List-box'> 
        <List 
            dense={true}
            sx={{
                'max-height: ': '10%',
                overflow: 'auto'
            }}>
            {
                pokemons && pokemons.map((item, index) => {
                    return <PokemonItem key={item.id} itemIndex={index} item={item}/>
                })
            }
        </List>       
    </div>
  );
}

export { PokemonList };
