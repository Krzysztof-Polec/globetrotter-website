import React, { useState } from "react"
import "./HomePage.scss"
import Nav from "../Nav/Nav"
import LocationComponent from "../LocationComponent/LocationComponent"

const HomePage = () => {
  const [currentLocation, setCurrentLocation] = useState("Sahara")
  const [selectedSuggestion, setSelectedSuggestion] = useState("Sahara")

  const handleLocationChange = (newLocation) => {
    setCurrentLocation(newLocation)
    setSelectedSuggestion(newLocation)
  }

  const locationData = {
    "Sahara": {
      location: "Sahara",
      title: "największa na świecie gorąca pustynia",
      description: "Sahara jest największą na świecie gorącą pustynią i trzecią co do wielkości pustynią po Antarktydzie i Arktyce. Znajduje się w Afryce Północnej i obejmuje duże obszary kontynentu - 9 200 000 kilometrów kwadratowych, co jest porównywalne z obszarem Chin czy Stanów Zjednoczonych!",
      imageURL: "../images/sahara_desert.webp",
    },
    "Nowa Zelandia": {
      location: "Nowa Zelandia",
      title: "Twoja podróż do Nowej Zelandii czeka",
      description: "W całej Nowej Zelandii można znaleźć wszystko, od dzikiej przyrody po bogatą kulturę. Od obniżających się gór i zamglonych fiordów, można znaleźć spokój na złotych plażach wijących się wokół cichych zatok. Zaprzyjaźnij się z nowymi przyjaciółmi w małym miasteczku z dużą dawką wyluzowanego uroku.",
      imageURL: "../images/new_zeland.webp",
    },
    "Góry": {
      location: "Góry",
      title: "Jedne z najwyższych szczytów na Ziemi",
      description: "W otoczeniu górskich majestatów odkryjesz niezapomniane krajobrazy i dzikość przyrody. Szlakami wiodącymi przez malownicze doliny i na szczyty, poznasz piękno gór, gdzie spokój i zachwyt spotykają się na Twojej drodze.",
      imageURL: "../images/regional_mountains.webp",
    },
    "Syjon": {
      location: "Syjon",
      title: "Twoja podróż do Syjonu czeka",
      description: "W Syjonie odkryjesz pełnię - od ducha i wiarą po bogatą historię. W mistycznym mieście i otaczającej go ziemi, możesz znaleźć spokój w otoczeniu świętych miejsc i zabytków. Zaprzyjaźnij się z nowymi duszami w tym wyjątkowym miejscu pełnym ducha i spokoju.",
      imageURL: "../images/zion.webp",
    },
    
  };

  return(
    <div className={`home-page ${locationData[currentLocation].location.toLowerCase().replace(/\s+/g, "-")}`}>
      <Nav></Nav>
      <LocationComponent
        key={selectedSuggestion}
        locationData={locationData}
        selectedSuggestion={selectedSuggestion}
        handleLocationChange={handleLocationChange}
      />
    </div>
  )
}

export default HomePage