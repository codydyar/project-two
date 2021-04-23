//css
import styles from '../styles/VehicleCard.module.css';
import Audi from '../data/Audi.png';
import Bentley from '../data/Bentley.png';
import BMW from '../data/BMW.png';
import Dodge from '../data/Dodge.png';
import Ford from '../data/Ford.png';
import GMC from '../data/GMC.png';
import Honda from '../data/Honda.png';
import Jeep from '../data/Jeep.png';
import Kia from '../data/Kia.png';
import Nissan from '../data/Nissan.png';
import Volvo from '../data/Volvo.png';

function VehicleCard({vehicle}) {
  let currentImage = '';
  function getImage() {
    switch(vehicle.make){
      case 'Audi': currentImage = Audi
      break;

      case 'Bentley': currentImage = Bentley
      break;

      case 'BMW': currentImage = BMW
      break;
      
      case 'Dodge': currentImage = Dodge
      break;

      case 'Ford': currentImage = Ford
      break;

      case 'GMC': currentImage = GMC
      break;

      case 'Honda': currentImage = Honda
      break;

      case 'Jeep': currentImage = Jeep
      break;

      case 'Kia': currentImage = Kia
      break;

      case 'Nissan': currentImage = Nissan
      break;

      case 'Volvo': currentImage = Volvo
      break;
      
      default: currentImage = '';
    }
  };

  getImage();
  
  return (
      <div className={styles.vehicleCard}>
        <img className="vehicle-card-image" src={currentImage} alt={vehicle.make} />
        <h3>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h3>
        <p>{`$ ${vehicle.price}`}</p>
        <p>{`VIN: ${vehicle.VIN}`}</p>
        <p>{vehicle.type}</p>
        <p>{vehicle.color}</p>
        <p>{`Mileage: ${vehicle.mileage}`}</p>
        <p>{vehicle.isNew === true ? 'New' : `${vehicle.mileage < 50000 ? 'Slightly Used' : 'Very Used' }`}</p> {/* Nested condition conditionals */}
      </div>
      )
  }

export default VehicleCard;