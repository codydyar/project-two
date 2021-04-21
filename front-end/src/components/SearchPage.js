import Header from './Header';
import { useState, useEffect } from 'react';
//css
import styles from '../styles/HomePage.module.css';

function SearchPage() {
  const [currentFilters, setCurrentFilters] = useState(window.location.search)
  const [searchResults, setSearchResults] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/search${currentFilters}`,) //fetches search based on existing pages search params
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setSearchResults(list))
    .catch(err=>err)
  }, [currentFilters]) //Updates the model list every time a new make is selected.

return (
  <div className={styles.homePage}>
    <Header />
    <div className={styles.mainBody}>
      <h1>Search Page</h1>
      <p>These vehicles exist for U</p>
    </div>
  </div>
  )
}

export default SearchPage;