import { ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material'
import { ItemDescription } from '../itemDescription/index.js'
import './itemList.css';


const PokemonItem = ({ key, itemIndex }) => {  
  const handleListItemClick = (index) => {
    console.log('Item -> ', index, ' foi CLICADO')
  }

  return (
    <div className='Item-Box'>
        <ListItemButton
            onClick={() => handleListItemClick(itemIndex)}
            sx={{
                backgroundColor: (itemIndex % 2 === 0) ? '##f5f5f5' : '#edecec',
                ":hover": {
                    background: '#93d7ef'
                }
            }}
            
        >
            <ListItemAvatar>
                <Avatar>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" className="Pokemon-Image" alt="PokemonAvatarImage" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText>
                <ItemDescription />
            </ListItemText>
        </ListItemButton>
    </div>
  );
}

export { PokemonItem };
