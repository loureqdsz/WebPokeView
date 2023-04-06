import React from 'react';
import { List } from '@mui/material'
import { PokemonItem } from '../itemList/index.js'
import './list.css';


const PokemonList = () => {
    function generate() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
            <PokemonItem key={value} itemIndex={value} />,
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
