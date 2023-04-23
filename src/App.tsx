import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import { Place } from "./types/Area";
import "./App.css";

function App() {
  const [areas, setAreas] = useState<Place[]>([]);

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

      setAreas(areaData);
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
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
    </div>
  );
}

export default App;
