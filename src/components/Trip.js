import locationIcon from './../images/location-icon.png'

export default function Trip(props) {
  return (
    <div className="trip">
      <img
        src={props.imageUrl}
        alt={props.title + 'image'}
        className="trip-img"
      />
      <div>
        <div className="location-desc">
          <img src={locationIcon} alt="Location Icon" />
          <span className="location-country">{props.location}</span>
          <a href={props.googleMapsUrl} className="link">
            View on Google Maps
          </a>
        </div>
        <h2 className="location--title">{props.title}</h2>
        <h4 className="location--dates">
          {props.startDate} - {props.endDate}
        </h4>
        <p className="location--desc">{props.description}</p>
      </div>
    </div>
  )
}
