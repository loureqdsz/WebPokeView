import { TextField, InputAdornment } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './textBox.css';

const TextBox = ({ value, onChange }) => {
  return (
    <>
        <TextField
            id="text-field"
            label="Pesquisar Pokemon"
            variant="standard"
            value={value}
            onChange={(e) => {
              onChange(e.target.value)
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
        />
    </>
  );
}

export { TextBox };
