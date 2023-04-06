import './header.css';
import PokemonLogo from '../../assets/images/pokemon-logo-4.png'

const Header = () => {
  return (
    <>
        <div className="Header-Container">
            <img src={PokemonLogo} className="Poke-Logo" alt="PokemonLogo" />
            <div className="Header-Second-Container">
                <div className="Poke-Wiki-Title">
                    <span>
                        Pokemon Wiki Page
                    </span>
                </div>
            </div>
        </div>
    </>
  );
}

export { Header };
