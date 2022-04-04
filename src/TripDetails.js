import { useLocation, useNavigate } from "react-router-dom";

const TripDetails = () => {
  const { state: trip } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="trip-details">
        <article>
          <h2>{ trip.name }</h2>
          <p>Destination: { trip.area }</p>
          <img src={`/${ trip.photo }`} alt={ trip.name } />
          <div>{ trip.description }</div>
        </article>
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