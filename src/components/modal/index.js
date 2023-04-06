import { Dialog, Button } from '@mui/material';
import './modal.css';


const ModalInformation = ({ onClose, open, item }) => {
  // ---------------- Render Functions ------------------------------
  const renderMultiValues = (values, itemField) => {
    if (!values) {
        return
    }
    let multiLabel = ''
    for (let i = 0; i < values.length; i++) {
        multiLabel = `${values[i][itemField].name}, ` + multiLabel
    }
    multiLabel = multiLabel.slice(0, multiLabel.length-2)
    return (
        <span className="Modal-Text-Description">{multiLabel}</span>
    )
  }

  const renderMultiStatsValues = (values) => {
    if (!values) {
        return
    }
    let multiLabel = ''
    for (let i = 0; i < values.length; i++) {
        multiLabel = `${values[i].stat.name}: ${values[i]['base_stat']}, ` + multiLabel
    }
    multiLabel = multiLabel.slice(0, multiLabel.length-2)
    return (
        <span className="Modal-Text-Description">{multiLabel}</span>
    )
  }
  // ----------------------------------------------------------------

  return (
    <Dialog open={open}>
        <div className="Modal-Container">
            <div className="Modal-Title">
                <span>Estatisticas do Pokemon {item?.name}</span>
            </div>
            <div className="Separator" />
            <div className="Modal-Content">
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Tipo: </span>
                    {renderMultiValues(item?.types, 'type')}
                </div>
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Habilidade: </span>
                    {renderMultiValues(item?.abilities, 'ability')}
                </div>
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Peso: </span>
                    <span className="Modal-Text-Description">{`${item?.weight} kg`}</span>
                </div>
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Stats: </span>
                    {renderMultiStatsValues(item?.stats)}
                </div>
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
