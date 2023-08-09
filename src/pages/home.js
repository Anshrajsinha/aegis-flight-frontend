import { useState } from "react"
import axios from "axios";
import { useContext } from "react"
import { UserContext } from "../userContext"

export const Home = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const server = "https://ansh-aegis-backend.onrender.com"
    const [city1, setCity1] = useState('delhi')
    const [city2, setCity2] = useState('chennai')
    const [date, setDate] = useState('11')
    const [info, setInfo] = useState(null)
    const selected = async () => {
        if (city1 !== city2) {
        let price = `${city1}${city2}${date}`
        console.log(price)
        const res = await axios.get(`${server}/city/show/${price}`)
        console.log(res.data)
        setInfo(res.data)
        }
    }
    return <div>
    
        <select className="select" id="selectCity1" value={city1} onChange={(e) => setCity1(e.target.value)}>
            <option value="delhi">Delhi</option>
            <option value="chennai">Chennai</option>
            <option value="mumbai">Mumbai</option>
        </select>
        <select className="select" id="selectCity2" value={city2} onChange={(e) => setCity2(e.target.value)}>
            <option value="chennai">Chennai</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
        </select>
        <select className="select" id="selectDate" value={date} onChange={(e) => setDate(e.target.value)}>
            <option value="11">11 April 2023</option>
            <option value="12">12 April 2023</option>
            <option value="13">13 April 2023</option>
        </select>
        <div>
            <button className="btn" onClick={selected}>Search Flights</button>
            {
                info && (
                    <h3>Number of Passengers - {info[0].passengers}</h3>
                )
            }
        </div>
            {
                info && (
                    <div className="flights-container">
                        <div className="flight">
                            <h3>Vistara ₹{info[0].vistara}</h3>
                            <p>{info[0].routes[0]}</p>
                        </div>
                        <div className="flight">
                            <h3>AirAsia ₹{info[0].airAsia}</h3>
                            <p>{info[0].routes[1]}</p>
                        </div>
                        <div className="flight">
                            <h3>Indigo ₹{info[0].indigo}</h3>
                            <p>{info[0].routes[2]}</p>
                        </div>
                     </div>
                )
            }
    </div>
}