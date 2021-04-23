import { Link } from 'react-router-dom';

//css
import styles from '../styles/Header.module.css';

function Header() {


  return (
    <div className={styles.header}>
      <img src="https://www.galvanize.com/images/galvanize-logo.svg" alt="Galvanize Auto"></img>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

  export default Header;