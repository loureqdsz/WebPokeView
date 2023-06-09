import './itemDescription.css';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';


const ItemDescription = ({ item }) => {
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
        <span className="Label-Description">{multiLabel}</span>
    )
  }
  // ----------------------------------------------------------------

  return (
    <>
        <div className='Item-Description-Container'>
            <div className='Description-Container'>
                <div className="Text-Container">
                    <span className="Label">Pokemon</span>
                    <span className="Label-Description">{item?.name}</span>
                </div>
                <div className="Text-Container">
                    <span className="Label">Tipo</span>
                    {renderMultiValues(item?.types, 'type')}
                </div>
                <div className="Text-Container">
                    <span className="Label">Habilidades</span>
                    {renderMultiValues(item?.abilities, 'ability')}
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
