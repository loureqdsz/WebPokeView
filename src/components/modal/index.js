import { Dialog, Button } from '@mui/material'
import './modal.css';


const ModalInformation = ({ onClose, open, item }) => {
  return (
    <Dialog open={open}>
        <div className="Modal-Container">
            <div className="Modal-Title">
                <span>Estatisticas do Pokemon {item.nome}</span>
            </div>
            <div className="Separator" />
            <div className="Modal-Content">
                <span className="Text-Title">Teste</span>
                <span className="Text-Title">Teste</span>
                <span className="Text-Title">Teste</span>
                <span className="Text-Title">Teste</span>
                <span className="Text-Title">Teste</span>
                <span className="Text-Title">Teste</span>
            </div>
            <div className= "Close-Button">
                <Button 
                    variant="contained" 
                    onClick={onClose}
                    sx={{
                        backgroundColor: '#0F84AE',
                        borderRadius: '15px'
                    }}
                >
                        Fechar
                </Button>                            
            </div>
        </div>
    </Dialog>
  );
}

export { ModalInformation };
