import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import { destinationValuesProps } from "../App";
import { Button } from "../components/atoms/Button";
import { Text } from "../components/atoms/Text";
import { CardDestination } from "../components/organisms/CardDestination";

export type ListingDestinationPageProps = {
  destinations: destinationValuesProps[];
  onOpenModal: () => void;
};

export const ListingDestinationPage = ({
  destinations,
  onOpenModal,
}: ListingDestinationPageProps) => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <Text type="mainTitle">Destinations</Text>
        <Button label="Ajouter" onClick={onOpenModal}>
          <AddIcon sx={{ fontSize: 16 }} />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((destination) => (
          <CardDestination key={uuidv4()} destination={destination} />
        ))}
      </div>
    </div>
  );
};
