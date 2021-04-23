import Header from './Header';

//css
import styles from '../styles/HomePage.module.css';

function AboutPage() {

  return (
    <div className={styles.aboutPage}>
      <Header />
      <div className={styles.aboutBody}>
        <h1>About Our Dealership</h1>
        <p>We Exist for U</p>
        <p>And Nobody Else ;)</p>
      </div>
    </div>
      )
  }



export default AboutPage;