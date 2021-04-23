import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import styles from '../styles/AdminPage.module.css'

// may be useful for backend https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm

function AdminPage() {
    // from https://stackoverflow.com/questions/46640024/how-do-i-post-form-data-with-fetch-api
    // const data = new FormData(formElement);


    const [ carInfo, setCarInfo ] = useState({})
    

    const onFormSubmit = () => {
        console.log(carInfo)
        if(carInfo.vin === undefined || carInfo.vin.length<17) {return alert('Please input a 17 digit vin')}
        if(carInfo.type === undefined ||!carInfo.type || carInfo.type === "") {return alert('Please input a vehicle type')}
        if(carInfo.year === undefined ||isNaN(carInfo.year) || parseInt(carInfo.year) < 1900 ||parseInt(carInfo.year) >10000) {return alert('Please input a valid year')}
        if(carInfo.make === undefined ||!carInfo.make || carInfo.make === "") {return alert('Please input a vehicle make')}
        if(carInfo.model === undefined ||!carInfo.model || carInfo.model === "") {return alert('Please input a vehicle model')}
        if(carInfo.color === undefined ||!carInfo.color || carInfo.color === "") {return alert('Please input a vehicle color')}
        if(carInfo.mileage === undefined ||isNaN(carInfo.mileage) || parseInt(carInfo.mileage) < 0) {return alert('Please input a valid mileage')}
        if(carInfo.price === undefined ||isNaN(carInfo.price) || parseInt(carInfo.price) <= 0) {return alert('Please input a valid price greater than 0')}
        if(carInfo.isNew === undefined ||!carInfo.hasOwnProperty("isNew")) {return alert('Please select a vehicle condition')}
        console.log('form validation complete')

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //"form data" might be handled in the return code
            body: JSON.stringify(carInfo)
        };

        fetch('http://localhost:3001/add-new-vehicle', requestOptions)
            .then(response => response.json())
            .then(() => console.log('post complete'))
            .catch(err=>err)
      };



    return (
    <div className={styles.adminpage}>
        {/* Button for vin*/}
        <div className={styles.vinInput}>
            <label>VIN:</label>
            <input
            type="text"
            id ="VIN"
            maxLength="17"
            minLength="17"
            onChange= {()=> (setCarInfo({...carInfo, vin: `${document.getElementById("VIN").value}`}))}
            />
        </div>    
        
        {/* Button for type*/}
        <div className={styles.typeInput}>
            <label>Type:</label>
            <input
            type="text"
            id ="type"
            onChange= {()=> (setCarInfo({...carInfo, type: `${document.getElementById("type").value}`}))}
            />
        </div>

         {/* Button for year*/}
         <div className={styles.yearInput}>
            <label>Year:</label>
            <input
            type="text"
            id ="year"
            maxLength="4"
            minLength="4"
            onChange= {()=> (setCarInfo({...carInfo, year: `${document.getElementById("year").value}`}))}
            />
        </div>
        
        {/* Button for make*/}
        <div className={styles.makeInput}>
            <label>Make:</label>
            <input
            type="text"
            id ="make"
            onChange= {()=> (setCarInfo({...carInfo, make: `${document.getElementById("make").value}`}))}
            />
        </div>

        {/* Button for model*/}
        <div className={styles.modelInput}>
            <label>Model:</label>
            <input
            type="text"
            id ="model"
            onChange= {()=> (setCarInfo({...carInfo, model: `${document.getElementById("model").value}`}))}
            />
        </div>

        {/* Button for color*/}
        <div className={styles.colorInput}>
            <label>Color:</label>
            <input
            type="text"
            id ="color"
            onChange= {()=> (setCarInfo({...carInfo, color: `${document.getElementById("color").value}`}))}
            />
        </div>
        
        {/* Button for  mileage*/}
        <div className={styles.mileageInput}>
                <label>Mileage:</label>
                <input
                type="text"
                id ="mileage"
                maxLength="6"
                onChange= {()=> (setCarInfo({...carInfo, mileage: `${document.getElementById("mileage").value === '' ? '0' : document.getElementById("mileage").value }`}))}
                />
        </div>
        {/* Button for  price*/}
        <div className={styles.priceInput}>
            <label>Price:</label>
            <input
            type="text"
            id ="price"
            maxLength="10"
            onChange= {()=> (setCarInfo({...carInfo, price: `${document.getElementById("price").value === '' ? '0' : document.getElementById("price").value }`}))}
            />
        </div>
        {/* Button for isNew */}
        <div className={styles.isNew}>
        <label>Condition:</label>
            <input type="radio" value="true" name="isNew" onChange= {()=> (setCarInfo({...carInfo, isNew: true}))}/> New
            <input type="radio" value="false" name="isNew" onChange= {()=> (setCarInfo({...carInfo, isNew: false}))}/> Used
        </div>

        <button className={styles.buttonBox} type='submit' onClick={onFormSubmit}>Add New Vehicle</button>
        
    </div>
    )

}

export default AdminPage;