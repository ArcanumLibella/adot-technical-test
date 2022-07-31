import { Switch } from "@mui/material";
import { useState } from "react";
import { destinationValuesProps } from "../../../App";
import { Text } from "../../atoms/Text";
import { CardDetail } from "../../molecules/CardDetail";

export type CardDestinationProps = { destination: destinationValuesProps };

export const CardDestination = ({ destination }: CardDestinationProps) => {
  const [checked, setChecked] = useState(destination.selected);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="w-full shadow-md bg-white rounded-sm">
      <div className="h-full max-h-36 overflow-hidden">
        <img
          src={destination.link}
          alt="car"
          className="w-full h-full object-cover rounded-t-sm"
        />
      </div>
      <div>
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div>
              <Text type="cardTitle" className="mb-1">
                {destination.name}
              </Text>
              <Text type="bodyRegularText">{destination.address}</Text>
            </div>
            <Switch
              color="secondary"
              checked={checked}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4 text-center">
          <CardDetail label="Habitants" data={destination.citizen} />
          <CardDetail label="Hôtels" data={destination.hostel} />
          <CardDetail label="Revenu moy" data={destination.income} />
          <CardDetail label="km2" data={destination.area} />
        </div>
      </div>
    </div>
  );
};
