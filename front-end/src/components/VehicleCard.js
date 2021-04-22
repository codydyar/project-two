//css
import styles from '../styles/VehicleCard.module.css';

function VehicleCard({vehicle}) {

  return (
      <div className={styles.vehicleCard}>
        <h3>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h3>
        <p>{`$ ${vehicle.price}`}</p>
        <p>{`VIN: ${vehicle.VIN}`}</p>
        <p>{vehicle.type}</p>
        <p>{vehicle.color}</p>
        <p>{`mileage: ${vehicle.mileage}`}</p>
        <p>{vehicle.isNew === true ? 'New' : `${vehicle.mileage < 50000 ? 'Slightly Used' : 'Very Used' }`}</p> {/* Nested condition conditionals */}
      </div>
      )
  }

export default VehicleCard;