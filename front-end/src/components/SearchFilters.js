import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'

//css
import styles from '../styles/SearchFilters.module.css';


// type year make model color mileage price isNew

// window.location.search
function SearchFilters() {

  const [filterInput, setFilterInput] = useState({make:'All',model: 'All', year:'All',color: 'All',type: 'All', maxPrice: 'All', isNew: 'All', mileage: 'All'}); // filterInput = {make: 'Ford', model: 'Fusion'}
  const [makeList, setMakeList] = useState(['Loading']) //change loading to '' after backend implementation
  const [modelList, setModelList] = useState(['Loading']) //change loading to '' after backend implementation
  const [colorList, setColorList] = useState(['Loading']) //change loading to '' after backend implementation
  const [typeList, setTypeList] = useState(['Loading']) //change loading to '' after backend implementation

  //search reaction to onClick

  const history = useHistory();

  const onSearchSubmit = () => {
    // alert(`You searched for ${filterInput.make} ${filterInput.model} ${filterInput.year} ${filterInput.color} ${filterInput.type}`)
    history.push(`/search?make=${filterInput.make}&model=${filterInput.model}&year=${filterInput.year}&color=${filterInput.color}&type=${filterInput.type}&maxPrice=${filterInput.maxPrice}&condition=${filterInput.isNew}&mileage=${filterInput.mileage}`)
    console.log(filterInput)
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
    if(filterInput.make === 'All'){return setModelList(['All'])}
    fetch(`http://localhost:3001/model?make=${filterInput.make}`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setModelList(list))
    .catch(err=>err)
  }, [filterInput.make]) //Updates the model list every time a new make is selected.

  //fetches all colors of a given make for filtering
  useEffect(() => {
    fetch(`http://localhost:3001/color`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setColorList(list))
    .catch(err=>err)
  }, []) //Updates only once

  useEffect(() => {
    fetch(`http://localhost:3001/type`,) //http://localhost:3001/model?make=Ford SELECT model FROM vehicles WHERE make=Ford
    .then(response => response.json()) //maybe the response is already a json, this depends on how the backend sends things
    .then(list => setTypeList(list))
    .catch(err=>err)
  }, []) //Updates only once

  return (
    <div className={styles.filters}>
      <h1>Filter</h1>
      <div className={styles.makeSelector}>
      {/* Button for Make */}
      <p>Make</p>
      <DropdownButton
        as={ButtonGroup}
        key={'make'}
        id={`dropdown-variants-make`}
        // variant={variant.toLowerCase()}
        title={filterInput.make} //change button displayed make when state is changed.
        
      >
          {makeList.map(variant => (<Dropdown.Item className={styles.button}  as="button" onClick={ ()=> (setFilterInput({...filterInput, make:`${variant}`, model: 'All'}))}>{variant}</Dropdown.Item>),)}
      </DropdownButton>
      </div>

      <div className={styles.modelSelector}>
      {/* Button for Model */}
      <p>Model</p>
      <DropdownButton
        as={ButtonGroup}
        key={'model'}
        id={`dropdown-variants-model`}
        // variant={variant.toLowerCase()}
        title={filterInput.model} //change button displayed make when state is changed.
      >
        
          {modelList.map(variant => (<Dropdown.Item className={styles.button}  as="button" onClick={ ()=> (setFilterInput({...filterInput, model: `${variant}`}))}>{variant}</Dropdown.Item>),)}
        
      </DropdownButton>
      </div>

      <div className={styles.yearSelector}>
      {/* textbox for Year */}
      <p>Year</p>
      <input
            type="text"
            id ="YearBox"
            maxlength="4"
            onChange= {()=> (setFilterInput({...filterInput, year: `${document.getElementById("YearBox").value === '' ? 'All' : document.getElementById("YearBox").value }`}))}
         />
      </div>

      <div className={styles.colorSelector}>
      {/* Button for Color */}
      <p>Color</p>
      <DropdownButton
        as={ButtonGroup}
        key={'color'}
        id={`dropdown-variants-color`}
        // variant={variant.toLowerCase()}
        title={filterInput.color} //change button displayed make when state is changed.
      >
        
          {colorList.map(variant => (<Dropdown.Item className={styles.button}  as="button" onClick={ ()=> (setFilterInput({...filterInput, color: `${variant}`}))}>{variant}</Dropdown.Item>),)}
        
      </DropdownButton>
      </div>

      <div className={styles.typeSelector}>
      {/* Button for Type */}
      <p>Type</p>
      <DropdownButton
        as={ButtonGroup}
        key={'type'}
        id={`dropdown-variants-type`}
        // variant={variant.toLowerCase()}
        title={filterInput.type} //change button displayed make when state is changed.
      >
        
          {typeList.map(variant => (<Dropdown.Item className={styles.button}  as="button" onClick={ ()=> (setFilterInput({...filterInput, type: `${variant}`}))}>{variant}</Dropdown.Item>),)}
        
      </DropdownButton>
      </div>

      {/* Button for Max Price */}
      <div className={styles.priceSelector}>
      <p>Max Price</p>
      <input
            type="text"
            id ="PriceBox"
            maxlength="10"
            onChange= {()=> (setFilterInput({...filterInput, maxPrice: `${document.getElementById("PriceBox").value === '' ? 'All' : document.getElementById("PriceBox").value }`}))}
         />
        </div>
      {/* Button for isNew */}
      

      <div className={styles.conditionSelector}>
      <p>Condition</p>
      
        <input type="radio" value="all" name="ConditionSelect" onChange= {()=> (setFilterInput({...filterInput, isNew: 'All'}))}/> All
        <input type="radio" value="true" name="ConditionSelect" onChange= {()=> (setFilterInput({...filterInput, isNew: true}))}/> New
        <input type="radio" value="false" name="ConditionSelect" onChange= {()=> (setFilterInput({...filterInput, isNew: false}))}/> Used
      </div>
      
      {/* Button for Mileage */}
      <div className={styles.mileageSelector}>
      <p>Mileage</p>
      <input
            type="text"
            id ="Mileage"
            maxlength="6"
            onChange= {()=> {
              console.log(document.getElementById("Mileage").value) 
              setFilterInput({...filterInput, mileage: `${document.getElementById("Mileage").value === '' ? 'All' : document.getElementById("Mileage").value }`})}
            }
         />
      </div>
      <button class={styles.buttonBox} type='submit' onClick={onSearchSubmit}>Filter</button>
    </div>


      )
  }

  export default SearchFilters;
