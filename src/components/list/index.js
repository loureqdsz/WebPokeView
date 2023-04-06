import React from 'react';
import { List } from '@mui/material'
import { PokemonItem } from '../itemList/index.js'
import './list.css';


const PokemonList = () => {
    const pokemon = {
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        nome: 'Charmander',
        tipo: 'Fogo',
        habilidade: 'Bola de fogo, Cuspida Invertida, Fogo Louco, Queimada Marota',
        estatisticas: {
            poder: '1000 power',
            level: '189',
            força: '400 de poder',
            idade: '5 anos'
        }
    }
    function generate() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
            <PokemonItem key={value} itemIndex={value} item={pokemon}/>,
        )
    }

  return (
    <div className='List-box'> 
        <List 
            dense={true}
            sx={{
                'max-height: ': '10%',
                overflow: 'auto'
            }}>
            {generate()}
        </List>       
    </div>
  );
}

export { PokemonList };
