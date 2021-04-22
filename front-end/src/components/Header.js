import Search from './Search';
import { Link } from 'react-router-dom';

//css
import styles from '../styles/Header.module.css';

function Header() {


  return (
    <div className={styles.header}>
      <p>logo goes here</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About</Link>
        </li>
      </ul>
      <div className={styles.searchBar}>
        <Search/>
      </div>
    </div>
  )
}

  export default Header;