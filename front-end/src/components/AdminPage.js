import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import styles from '../styles/AdminPage.module.css'

// may be useful for backend https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm

function AdminPage() {
    // from https://stackoverflow.com/questions/46640024/how-do-i-post-form-data-with-fetch-api
    // const data = new FormData(formElement);


    const [ carInfo, setCarInfo ] = useState([])

    // from https://stackblitz.com/edit/react-http-post-request-examples-fetch-kihupm?file=App%2FPostRequestHooks.jsx
    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "form data no quotes": 'form data' })
        };
        fetch('http://localhost:3001/WHAT_ENDPOINT', requestOptions)
            .then(response => response.json())
            .then(data => setCarInfo(data.WHAT));
    // empty dependency array means this effect will only run once
    }, []);
    

    // HOW TO PULL INPUTS TO 'DATA'
    return (
        <form>
            <label >VIN: </label><br>
            <input type="text" id="vin"><br>
            <label >type: </label><br>
            <input type="text" id="type"><br>
            <label >year: </label><br>
            <input type="text" id="year"><br>
            <label >make: </label><br>
            <input type="text" id="make"><br>
            <label >model: </label><br>
            <input type="text" id="model"><br>

            {/* extend form to other attributes, if concept is correct */}

        </form>
    )

}

// CUT OFF FOR GOOD RENDERS OF REST OF APP
// export default function AdminPage