import dev from '../images/dev.svg'

function Header() {

    return (
        <header className="header">
      <img className="header__logo" src={dev} alt="лого" />
    </header>
    );
  };
  
  export default Header;