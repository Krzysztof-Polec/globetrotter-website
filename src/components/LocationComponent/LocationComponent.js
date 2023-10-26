import "./LocationComponent.scss"

const LocationComponent = (props) => {
  const { locationData, selectedSuggestion } = props

  const suggestedLocations = Object.keys(locationData).filter(location => location !== selectedSuggestion)
  
  return(
    <main>
      <div className="main-content">
        <div className="main-content-location">
          <div></div>
          <p>{locationData[selectedSuggestion].location}</p>
        </div>
        <div className="main-content-tittle">
          <p>{locationData[selectedSuggestion].title}</p>
        </div>
        <div className="main-content-description">
          <p>{locationData[selectedSuggestion].description}</p>
        </div>
        <div className="main-content-buttons">
          <div className="bookmark-button">
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#ffffff" }}>
              <path d="m0 512v-464c0-26.51 21.49-48 48-48h288c26.51 0 48 21.49 48 48v464l-192-112z" />
            </svg>
          </div>
          <div className="read-article-button">
            <p>przeczytaj artykuł</p>
          </div>
        </div>
      </div>
      <div className="more-locations">
      {suggestedLocations.map((location) => (
          <div
            key={location}
            className={`suggested-location ${location.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => props.handleLocationChange(location)}
          >
            <div></div>
            <p>{locationData[location].location}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default LocationComponent