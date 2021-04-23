import Search from './Search';
import Header from './Header';
import VehicleCard from './VehicleCard';
import Footer from './Footer';
import { useState, useEffect } from 'react';
//css
import styles from '../styles/HomePage.module.css';

function HomePage() {


  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3001/search`,) //fetches search based on existing pages search params
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => {
      console.log(list)
      setSearchResults(list)
    })
    .catch(err=>err)
  }, []) //Updates the model list every time a new make is selected.

//for pull random featured vehicles
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  

  return (
    <div className={styles.homePage}>
      <Header />
      <Search/>
      <div className={styles.mainBody}>
        <h1>Galvanize Auto</h1>
        <p>We Exist for U</p>
        <section className={styles.vehicleCards}>
          {searchResults.length === 0 ? null :  <VehicleCard vehicle={searchResults[getRandomInt(0,searchResults.length-1)]}/>}
          {searchResults.length === 0 ? null :  <VehicleCard vehicle={searchResults[getRandomInt(0,searchResults.length-1)]}/>}
          {searchResults.length === 0 ? null :  <VehicleCard vehicle={searchResults[getRandomInt(0,searchResults.length-1)]}/>}
          {searchResults.length === 0 ? null :  <VehicleCard vehicle={searchResults[getRandomInt(0,searchResults.length-1)]}/>}
          {searchResults.length === 0 ? null :  <VehicleCard vehicle={searchResults[getRandomInt(0,searchResults.length-1)]}/>}
          {searchResults.length === 0 ? null :  <VehicleCard vehicle={searchResults[getRandomInt(0,searchResults.length-1)]}/>}
        </section>
      </div>
      <Footer />
    </div>
      )
  }

export default HomePage;