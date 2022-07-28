import { Button } from "../components/atoms/Button";
import { Text } from "../components/atoms/Text";

export const ListingDestinationPage = () => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <Text type="mainTitle">Destinations</Text>
        <Button label="Ajouter" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-green-200 w-full h-80">
          <Text type="cardTitle">New-York</Text>
          <Text type="bodyRegularText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            iure nihil quis quos veniam ratione aspernatur. Sed, voluptate? Quis
            ex delectus eos eaque dolorum dolore laudantium fugit exercitationem
            rem explicabo.
          </Text>
          <Text type="bodyRegularTextBold">Piti text</Text>
        </div>
      </div>
    </div>
  );
};
