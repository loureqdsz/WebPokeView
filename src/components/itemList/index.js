import { useEffect, useState } from 'react';
import { ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { ItemDescription } from '../itemDescription/index.js';
import { ModalInformation } from '../modal/index.js';
import './itemList.css';


const PokemonItem = ({ key, itemIndex, item }) => {
  const [open, setOpen] = useState(false)
  const [pokemon, setPokemon] = useState(null)

  // ----------- Initializing component ------------------------

  useEffect(() => {
    if (pokemon === null) {
      fetch(
        item.url, {
            method: 'GET'
        }
        ).then((res) => {
            if (res.status) {
                return res.json()
            }
        }).then((data) => {
            if (!data || data.error) {
                console.log('Dados do pokemon nao foram obtidos')
                return
            }
            setPokemon(data)
        })
    }
  })

  // ---------------- Handle Functions ------------------------------

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  // ----------------------------------------------------------------

  return (
    <div className='Item-Box'>
        <ListItemButton
            onClick={handleClickOpen}
            sx={{
                backgroundColor: (itemIndex % 2 === 0) ? '##f5f5f5' : '#edecec',
                ":hover": {
                    background: '#93d7ef'
                }
            }}
            
        >
            <ListItemAvatar>
                <Avatar>
                    <img src={pokemon?.sprites['front_default']} className="Pokemon-Image" alt="PokemonAvatarImage" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText>
                <ItemDescription item={pokemon}/>
            </ListItemText>
        </ListItemButton>
        <ModalInformation onClose={handleClose} open={open} item={pokemon}/>
    </div>
  );
}

export { PokemonItem };
