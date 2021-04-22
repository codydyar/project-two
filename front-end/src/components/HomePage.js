import Header from './Header';
import VehicleCard from './VehicleCard';

//css
import styles from '../styles/HomePage.module.css';

function HomePage() {

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.mainBody}>
        <h1>Name of Dealership</h1>
        <p>We Exist for U</p>
        <VehicleCard />
      </div>
    </div>
      )
  }

export default HomePage;