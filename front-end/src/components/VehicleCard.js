//css
import styles from '../styles/VehicleCard.module.css';

function VehicleCard() {

  return (
      <div className={styles.vehicleCard}>
        <h3>Vehicle Name</h3>
        <p>Vehicle Content</p>
      </div>
      )
  }

export default VehicleCard;