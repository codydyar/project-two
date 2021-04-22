import Header from './Header';
import Footer from './Footer';
import VehicleCard from './VehicleCard';
import { useState, useEffect } from 'react';
import SearchFilters from './SearchFilters'
//css
import styles from '../styles/SearchPage.module.css';

function SearchPage() {
  // const [currentFilters, setCurrentFilters] = useState(window.location.search)
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3001/search${window.location.search}`,) //fetches search based on existing pages search params
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => {
      console.log(list)
      setSearchResults(list)
    })
    .catch(err=>err)
  }, [window.location.search]) //Updates the model list every time a new make is selected.

return (
  <div className={styles.searchPage}>
    <Header />
    <h1>Search Results</h1>
    <p>We found {searchResults.length} vehicles for U.</p>
    <div className={styles.mainBody}>
      <SearchFilters />
      <div className={styles.vehiclesList}>
        {searchResults.map((vehicle) => (
              <div key={vehicle.id}>
                {/* <Link
                  to={`/games/${vehicle}`}
                  style={{ textDecoration: "none" }}
                > */}
                  <VehicleCard vehicle={vehicle} />
                {/* </Link> */}
              </div>
            ))}
        </div>
    </div>
    <Footer />
  </div>
  )
}

export default SearchPage;