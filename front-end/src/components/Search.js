// import Header from './Header';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'

//css
import styles from '../styles/Search.module.css';

function Search() {

  const [searchInput, setSearchInput] = useState({make:'All',model: 'All'}); // searchInput = {make: 'Ford', model: 'Fusion'}
  const [makeList, setMakeList] = useState(['Loading']) //change loading to '' after backend implementation
  const [modelList, setModelList] = useState(['Loading']) //change loading to '' after backend implementation

  const history = useHistory();

  const onSearchSubmit = () => {
    alert(`You searched for ${searchInput.make} ${searchInput.model}`)
    history.push(`/search?make=${searchInput.make}&model=${searchInput.model}`)
  };
  //fetch all vehicle makes for filtering
  useEffect(() => {
    fetch('http://localhost:3001/make',)
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setMakeList(list))
    .catch(err=>err)
  }, []) //left [] empty as the list only needs to be generated once.

  //fetches all models given a specific make for filtering
  useEffect(() => {
    if(searchInput.make === 'All'){return setModelList(['All'])}
    fetch(`http://localhost:3001/model?make=${searchInput.make}`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setModelList(list))
    .catch(err=>err)
  }, [searchInput.make]) //Updates the model list every time a new make is selected.


  return (
    <div>
      <div>
      {/* Button for Make */}
      <DropdownButton
        as={ButtonGroup}
        key={'make'}
        id={`dropdown-variants-make`}
        // variant={variant.toLowerCase()}
        title={searchInput.make} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {makeList.map(variant => (<Dropdown.Item onClick={ ()=> (setSearchInput({make:`${variant}`,model: 'All'}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>

      {/* Button for Model */}
      <DropdownButton
        as={ButtonGroup}
        key={'model'}
        id={`dropdown-variants-model`}
        // variant={variant.toLowerCase()}
        title={searchInput.model} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {modelList.map(variant => (<Dropdown.Item onClick={ ()=> (setSearchInput({make:`${searchInput.make}`,model: `${variant}`}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>


      </div>
      <button class={styles.buttonBox} type='submit' onClick={onSearchSubmit}>Search</button>
    </div>


      )
  }

  export default Search;