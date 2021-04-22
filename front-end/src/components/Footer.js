import { Link } from 'react-router-dom';

//css
import styles from '../styles/Footer.module.css';

function Footer() {


  return (
    <div className={styles.footer}>
      <p>logo goes here</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to ="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

  export default Footer;