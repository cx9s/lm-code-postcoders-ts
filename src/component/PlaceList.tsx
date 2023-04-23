import { Place } from "../types/Area";
import PlaceCard from "./PlaceCard";

interface PlaceListPorps {
  placeList: Place[];
}

const PlaceList: React.FC<PlaceListPorps> = ({ placeList }) => {
  return (
    <div>
      {placeList.map((place, index) => (
        <PlaceCard key={"place" + index} place={place} />
      ))}
    </div>
  );
};

export default PlaceList;
