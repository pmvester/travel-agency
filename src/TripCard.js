import { durationDays, formatCurrency } from "./utilities";

const TripCard = ({ trip }) => {

  const typeIndication = (type) => {
    switch (type) {
      case 'mc':
        return <img id="motorcycle" src="/motorcycle-icon.png" alt="" />
      case 'vandring':
        return <img id="hiking" src="/hiking-icon.png" alt="" />
      default:
        return <h3 className="rightTop">{ trip.type }</h3>
    }
  }

  return (
    <div className="trip-card">
      <h2 className="leftTop">{ trip.name } <br /><span>{ trip.startDate }</span></h2>
      <h2 className="rightBottom"><span>Pris:</span> { formatCurrency.format(trip.price) }</h2>
      { typeIndication(trip.type) }
      <h3 className="leftBottom">{ `${ durationDays(trip.startDate, trip.endDate) } dagar`} </h3>
      <img src={`/${ trip.photo }`} alt={ trip.name } />
    </div>
  );
}
 
export default TripCard;