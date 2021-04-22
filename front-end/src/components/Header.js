import { Link } from 'react-router-dom';

//css
import styles from '../styles/Header.module.css';

function Header() {


  return (
    <div className={styles.header}>
      <p>logo goes here</p>
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