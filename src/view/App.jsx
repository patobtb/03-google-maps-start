import { useRef, useState } from "react";
import TopBar from "./TopBar";
import GoogleMap from "./GoogleMap";

// utility function
const log = (...args) => console.log.apply(null, ["App -->", ...args]);

export default function App() {

  const [latlng, setLatlng] = useState({
    lat: -34.397,
    lng: 150.644
  });
  const [zoom, setZoom] = useState(8);

  const input = useRef(null);

  function zooming(event){
    const num = Number(event.target.value)
    setZoom(num)
  };

  function reposition(city) {
    switch (city) {
      case "tel aviv":
        setLatlng({ lat: 32.0042938, lng: 34.7615399 });
        break;
      case "london":
        setLatlng({lat: 51.5286416, lng: -0.1015987});
        break;
      case "paris":
        setLatlng({lat: 48.8589384, lng: 2.4294347});
        break;
      default:
        alert("Location not supported");
    }
  }


    log(latlng);
    return (
      <div className="app">
        <TopBar>Google Maps Example in React</TopBar>
        <div className="hbox mb20">
          <button onClick={() => reposition("tel aviv")}>Tel Aviv</button>
          <button onClick={() => reposition("london")}
          >London</button>
          <button onClick={() => reposition("paris")}
          >Paris</button>
          <input onChange={zooming}
            ref={input.current} type="number" min="8" max="16" placeholder="8" />
        </div>
        <GoogleMap lat={latlng.lat} lng={latlng.lng} zoom={zoom}/>
        {/* <GoogleMap {...latlng} /> */}
      </div>
    );
}
