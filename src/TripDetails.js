import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const TripDetails = () => {
  const { state: trip } = useLocation();
  const navigate = useNavigate();

  const { data: hotels, isPending, error } = useFetch(process.env.REACT_APP_DB + '/hotels?name=' + trip.hotel);

  return (
    <div className="trip-details">
        <article>
          <h2>{ trip.name }</h2>
          <p>Destination: { trip.area }</p>
          <div>
            <img className='image-float' src={`/${ trip.photo }`} alt={ trip.name } />
            { trip.description }
          </div>
        </article>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { hotels && <h2>Hotel: { hotels[0].fullName }</h2> }
      <div>
        <button onClick={() => {
          navigate(-1);
        }}>Tillbaka</button>
        <button onClick={() => {
          navigate('/signup', { state: trip });
        }}>Intresseanmälan</button>
      </div>
    </div>
  );
}
 
export default TripDetails;