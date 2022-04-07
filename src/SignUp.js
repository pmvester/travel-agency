import { durationDays, formatCurrency } from "./utilities";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const location = useLocation();
  const { state: trip } = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [singleRoom, setSingleRoom] = useState(false);
  const [smcReduction, setSmcReduction] = useState(false);
  const [totalPrice, setTotalPrice] = useState(trip.price); 
  const [tripType, setTripType] = useState(trip.type);

  const setSingle = (v) => {
    setSingleRoom(v);
    if (v) {
      setTotalPrice(totalPrice + trip.singleRoom);
    } else {
      setTotalPrice(totalPrice - trip.singleRoom);
    }
  }

  const setSmc = (v) => {
    setSmcReduction(v);
    if (v) {
      setTotalPrice(totalPrice + trip.smcReduction);
    } else {
      setTotalPrice(totalPrice - trip.smcReduction);
    }
  }

  return (
    <div className="signup">
        <h2>Intresseanmälan</h2><br />
        <div className="signup-info">
          <p><b>Resa</b>: { trip.name }</p>
          <p><b>Region</b>: { trip.area }</p>
          <p><b>Typ</b>:&nbsp;
          {
            {
              'mc': 'Mc-resa',
              'vandring': 'Vandringsresa',
              'skidor': 'Skidresa'
            }[trip.type]
          }
          </p>
          <p><b>Avresa</b>: { trip.startDate }</p>
          <p><b>Hemkomst</b>: { trip.endDate }</p>
          <p><b>Antal dagar</b>: { durationDays(trip.startDate, trip.endDate) }</p>
          <h2>Pris: { formatCurrency.format(totalPrice) }</h2><br />
        </div>
        <div className='signup-filler'></div>
        <form>
          <div className="signup-data">
            <label>Förnamn<br />
              <input 
                type="text" 
                required 
                autoFocus
                onChange={(e) => setFirstName(e.target.value) }
              />
            </label>
            <label>Efternamn<br />
              <input 
                type="text" 
                required
                onChange={(e) => setLastName(e.target.value) }
              />
            </label>
            <label>E-mail<br />
              <input 
                type="email" 
                required
                onChange={(e) => setEmail(e.target.value) }
              />
            </label>
            <label>Tel<br />
              <input 
                type="tel" 
                required
                pattern="\+[0-9]{2}-[0-9]{2}-[0-9]{7}"
                onChange={(e) => setPhone(e.target.value) }
              />
            </label>
            <label>
              <input 
                type="checkbox" 
                onClick={ (e) => { 
                  setSingle(e.target.checked)
                }}
              />&nbsp;Enkelrum ({ formatCurrency.format(trip.singleRoom) })
            </label>
            { trip.smcReduction && (
              <div>
                <label>
                  <input 
                    type="checkbox" 
                    onClick={ (e) => setSmc(e.target.checked) }
                  />&nbsp;Medlem i SMC ({formatCurrency.format(trip.smcReduction)})
                </label>
              </div>
            )}
          </div>
          <button onClick={() => {
              navigate(-1);
            }}>Avbryt</button>
            <button onClick={() => {
              console.log(firstName);
            }}>Skicka</button>
        </form>
    </div>
  );
}
 
export default SignUp;