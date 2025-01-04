import PropTypes from "prop-types";

Entry.propTypes = {
  img: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  dates: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default function Entry(props) {
  return (
    <article className="entry-container">
      <div className="entry-body">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />

        <div className="entry-header">
          <div className="entry-location">
            <img src="/src/assets/images/marker.png" alt="marker" />
            <p>Location: {props.location}</p>
            <a href={props.map}>Google Maps Link</a>
          </div>

          <div className="entry-dates">
            {props.dates && <p>Dates: {props.dates}</p>}
          </div>
          <p className="entry-description">{props.description}</p>
        </div>
      </div>
    </article>
  );
}
