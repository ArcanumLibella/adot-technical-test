import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DestinationsContextType, IDestination } from "../@types/destination";
import { Button } from "../components/atoms/Button";
import { Text } from "../components/atoms/Text";
import { CardDestination } from "../components/organisms/CardDestination";
import { DestinationsContext } from "../context/DestinationContext";

export type ListingDestinationPageProps = {
  onOpenModal: () => void;
};

export const ListingDestinationPage = ({
  onOpenModal,
}: ListingDestinationPageProps) => {
  const { destinations } = useContext(
    DestinationsContext,
  ) as DestinationsContextType;

  return (
    <div>
      <div className="flex justify-between mb-8">
        <Text type="mainTitle">Destinations</Text>
        <Button label="Ajouter" onClick={onOpenModal}>
          <AddIcon sx={{ fontSize: 16 }} />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((destination: IDestination) => (
          <CardDestination key={uuidv4()} destination={destination} />
        ))}
      </div>
    </div>
  );
};
