import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'

//css
import styles from '../styles/SearchFilters.module.css';


// type year make model color mileage price isNew

// window.location.search
function SearchFilters() {

  const [searchInput, setSearchInput] = useState({make:'All',model: 'All'}); // searchInput = {make: 'Ford', model: 'Fusion'}
  const [filterInput, setFilterInput] = useState({year:'All',color: 'All',type: 'All', maxPrice: 'All', isNew: 'All', mileage: 'All'}); // searchInput = {make: 'Ford', model: 'Fusion'}

  const [yearList, setYearList] = useState(['Loading']) //change loading to '' after backend implementation
  const [colorList, setColorList] = useState(['Loading']) //change loading to '' after backend implementation
  const [typeList, setTypeList] = useState(['Loading']) //change loading to '' after backend implementation
  const [priceList, setPriceList] = useState(['Loading']) //change loading to '' after backend implementation
  const [newList, setNewList] = useState(['Loading']) //change loading to '' after backend implementation
  const [mileageList, setMileageList] = useState(['Loading']) //change loading to '' after backend implementation

  //search reaction to onClick

  const history = useHistory();

  const onSearchSubmit = () => {
    alert(`You searched for ${searchInput.make} ${searchInput.model} ${filterInput.year} ${filterInput.color} ${filterInput.type}`)
    history.push(`/search?make=${searchInput.make}&model=${searchInput.model}&year=${filterInput.year}&color=${filterInput.color}&type=${filterInput.type}&maxPrice=${filterInput.maxPrice}&condition=${filterInput.isNew}&mileage=${filterInput.mileage}`)
  };
  //fetch all vehicle years of a given make for filtering
  useEffect(() => {
    if(searchInput.make === 'All'){return setYearList(['All'])}
    fetch(`http://localhost:3001/year?make=${searchInput.make}`,)
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setYearList(list))
    .catch(err=>err)
  }, [searchInput.make]) //left [] empty as the list only needs to be generated once.

  //fetches all colors of a given make for filtering
  useEffect(() => {
    if(searchInput.make === 'All'){return setColorList(['All'])}
    fetch(`http://localhost:3001/color?make=${searchInput.make}`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setColorList(list))
    .catch(err=>err)
  }, [searchInput.make]) //Updates the model list every time a new make is selected.

  useEffect(() => {
    if(searchInput.make === 'All'){return setTypeList(['All'])}
    fetch(`http://localhost:3001/type?make=${searchInput.make}`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setTypeList(list))
    .catch(err=>err)
  }, [searchInput.make]) //Updates the model list every time a new make is selected.

  useEffect(() => {
    if(searchInput.make === 'All'){return setPriceList(['All'])}
    fetch(`http://localhost:3001/price?make=${searchInput.make}`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setPriceList(list))
    .catch(err=>err)
  }, [searchInput.make]) //Updates the model list every time a new make is selected.

  useEffect(() => {
    if(searchInput.make === 'All'){return setNewList(['All'])}
    fetch(`http://localhost:3001/isNew?make=${searchInput.make}`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setNewList(list))
    .catch(err=>err)
  }, [searchInput.make]) //Updates the model list every time a new make is selected.

  useEffect(() => {
    if(searchInput.make === 'All'){return setMileageList(['All'])}
    fetch(`http://localhost:3001/mileage?make=${searchInput.make}`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setMileageList(list))
    .catch(err=>err)
  }, [searchInput.make]) //Updates the model list every time a new make is selected.


  return (
    <div>
      <div>
      {/* Button for Year */}
      <p>Year</p>
      <DropdownButton
        as={ButtonGroup}
        key={'year'}
        id={`dropdown-variants-year`}
        // variant={variant.toLowerCase()}
        title={filterInput.year} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {yearList.map(variant => (<Dropdown.Item onClick={ ()=> (setFilterInput({year: `${filterInput.year}`, color: `${filterInput.color}`, type: `${filterInput.type}`, maxPrice: `${filterInput.maxPrice}`, isNew: `${filterInput.isNew}`, mileage: `${filterInput.mileage}`}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>


      {/* Button for Color */}
      <p>Color</p>
      <DropdownButton
        as={ButtonGroup}
        key={'color'}
        id={`dropdown-variants-color`}
        // variant={variant.toLowerCase()}
        title={filterInput.color} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {colorList.map(variant => (<Dropdown.Item onClick={ ()=> (setFilterInput({year: `${filterInput.year}`, color: `${filterInput.color}`, type: `${filterInput.type}`, maxPrice: `${filterInput.maxPrice}`, isNew: `${filterInput.isNew}`, mileage: `${filterInput.mileage}`}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>

      {/* Button for Type */}
      <p>Type</p>
      <DropdownButton
        as={ButtonGroup}
        key={'type'}
        id={`dropdown-variants-type`}
        // variant={variant.toLowerCase()}
        title={filterInput.type} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {typeList.map(variant => (<Dropdown.Item onClick={ ()=> (setFilterInput({year: `${filterInput.year}`, color: `${filterInput.color}`, type: `${filterInput.type}`, maxPrice: `${filterInput.maxPrice}`, isNew: `${filterInput.isNew}`, mileage: `${filterInput.mileage}`}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>

      {/* Button for Max Price */}
      <p>Max Price</p>
      <DropdownButton
        as={ButtonGroup}
        key={'maxPrice'}
        id={`dropdown-variants-maxPrice`}
        // variant={variant.toLowerCase()}
        title={filterInput.maxPrice} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {priceList.map(variant => (<Dropdown.Item onClick={ ()=> (setFilterInput({year: `${filterInput.year}`, color: `${filterInput.color}`, type: `${filterInput.type}`, maxPrice: `${filterInput.maxPrice}`, isNew: `${filterInput.isNew}`, mileage: `${filterInput.mileage}`}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>

      {/* Button for isNew */}
      <p>Condition</p>
      <DropdownButton
        as={ButtonGroup}
        key={'isNew'}
        id={`dropdown-variants-isNew`}
        // variant={variant.toLowerCase()}
        title={filterInput.isNew} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {newList.map(variant => (<Dropdown.Item onClick={ ()=> (setFilterInput({year: `${filterInput.year}`, color: `${filterInput.color}`, type: `${filterInput.type}`, maxPrice: `${filterInput.maxPrice}`, isNew: `${filterInput.isNew}`, mileage: `${filterInput.mileage}`}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>

      {/* Button for Mileage */}
      <p>Mileage</p>
      <DropdownButton
        as={ButtonGroup}
        key={'mileage'}
        id={`dropdown-variants-mileage`}
        // variant={variant.toLowerCase()}
        title={filterInput.mileage} //change button displayed make when state is changed.
      >
        <Dropdown.Menu>
          {mileageList.map(variant => (<Dropdown.Item onClick={ ()=> (setFilterInput({year: `${filterInput.year}`, color: `${filterInput.color}`, type: `${filterInput.type}`, maxPrice: `${filterInput.maxPrice}`, isNew: `${filterInput.isNew}`, mileage: `${filterInput.mileage}`}))}>{variant}</Dropdown.Item>),)}
        </Dropdown.Menu>
      </DropdownButton>


      </div>
      <button class={styles.buttonBox} type='submit' onClick={onSearchSubmit}>Filter</button>
    </div>


      )
  }

  export default SearchFilters;
