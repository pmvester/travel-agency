import TripCard from "./TripCard";
import { Link } from "react-router-dom";

const TripsList = ({ trips }) => {
  return (
    <div className="trips-list">
      {trips.map((trip) => (
        <Link to={ `/trips/${ trip.id }` } state={ trip } key={trip.id}>
          <TripCard trip={ trip } />
        </Link>
      ))}
    </div>
  );
}
 
export default TripsList;