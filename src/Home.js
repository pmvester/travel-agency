import TripsList from './TripsList';
import useFetch from './useFetch';

const Home = () => {
  const { data: trips, isPending, error } = useFetch(process.env.REACT_APP_DB + '/trips');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {trips && <TripsList trips={trips} title='Alla resor!' />}
    </div>
  );
}
 
export default Home;