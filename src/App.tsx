import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import { Place } from "./types/Area";
import "./App.css";
import PlaceCard from "./component/PlaceCard";
import PlaceList from "./component/PlaceList";

function App() {
  const [places, setPlaces] = useState<Place[]>([]);

  const [postcode, setPostcode] = useState<string>("M1");

  const clickHandler = () => {
    const code = (
      document.querySelector("#postcode") as HTMLInputElement
    ).value.split(" ")[0];
    if (code !== postcode) {
      setPostcode(code);
    }
  };

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);

      setPlaces(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <p>input you postcode below</p>
      <input id="postcode" type="text" />
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        click
      </button>
      <h2>{`Areas for ${postcode}: ${places.length}`}</h2>
      <h3>Areas List</h3>
      <PlaceList placeList={places} />
    </div>
  );
}

export default App;
