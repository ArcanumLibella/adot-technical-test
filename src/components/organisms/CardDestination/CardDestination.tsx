import { Switch } from "@mui/material";
import { Text } from "../../atoms/Text";
import { CardDetail } from "../../molecules/CardDetail";

export const CardDestination = () => {
  return (
    <div className="w-full shadow-md bg-white rounded-sm">
      <div className="max-h-36 overflow-hidden">
        <img
          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          alt="car"
          className="object-cover rounded-t-sm"
        />
      </div>
      <div>
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div>
              <Text type="cardTitle" className="mb-1">
                New-York
              </Text>
              <Text type="bodyRegularText">
                New York, NY 10004, United States
              </Text>
            </div>
            <Switch color="secondary" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4 text-center">
          <CardDetail label="Habitants" data="3.4 M" />
          <CardDetail label="Hôtels" data="5000" />
          <CardDetail label="Revenu moy" data="70 000 m2" />
          <CardDetail label="km2" data="783.8" />
        </div>
      </div>
    </div>
  );
};
