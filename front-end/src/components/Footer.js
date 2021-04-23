import { Link } from 'react-router-dom';

//css
import styles from '../styles/Footer.module.css';

function Footer() {

  return (
    <div className={styles.footer}>
      <Link to ="/about">Learn more about us!</Link>
      <section className={styles.contactUs}>
        Contact Us
        <ul>
          <li>
            Facebook
          </li>
          <li>
            Instagram
          </li>
          <li>
            LinkedIn
          </li>
        </ul>
      </section>
    </div>
  )
}

  export default Footer;