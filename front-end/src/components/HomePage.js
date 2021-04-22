import Search from './Search';
import Header from './Header';
import VehicleCard from './VehicleCard';
import Footer from './Footer';

//css
import styles from '../styles/HomePage.module.css';

function HomePage() {

  return (
    <div className={styles.homePage}>
      <Header />
      <Search/>
      <div className={styles.mainBody}>
        <h1>Name of Dealership</h1>
        <p>We Exist for U</p>
        <section className={styles.vehicleCards}>
          <VehicleCard vehicle={{vin: 1000}}/>
          <VehicleCard vehicle={{vin: 4000}}/>
          <VehicleCard vehicle={{vin: 46}}/>
        </section>
      </div>
      <Footer />
    </div>
      )
  }

export default HomePage;