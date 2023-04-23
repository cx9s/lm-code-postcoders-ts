import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Place } from "../types/Area";

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  console.log(place);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {place["place name"]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {place.state} ({place["state abbreviation"]})
        </Typography>
        <Typography variant="body2">
          coordinates: {place.latitude}, {place.longitude}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
