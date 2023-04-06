import './itemDescription.css';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';


const ItemDescription = () => {
  return (
    <>
        <div className='Item-Description-Container'>
            <div className='Description-Container'>
                <div className="Text-Container">
                    <span className="Label">Pokemon</span>
                    <span className="Label-Description">Pikachu</span>
                </div>
                <div className="Text-Container">
                    <span className="Label">Tipo</span>
                    <span className="Label-Description">Elétrico</span>
                </div>
                <div className="Text-Container">
                    <span className="Label">Habilidades</span>
                    <span className="Label-Description">Choque forte, Choque louco, Chore aquatico</span>
                </div>
            </div>
            <div className="More-Information">
                <span className="Label">Estatisticas</span>
                <div className="Label-Click">
                    <span className="Label-Description">Clique para saber mais</span>
                    <LaunchOutlinedIcon sx={{ color: '#0a95c7', fontSize: 14, marginLeft: 1 }}/>
                </div>
            </div>
        </div>
    </>
  );
}

export { ItemDescription };