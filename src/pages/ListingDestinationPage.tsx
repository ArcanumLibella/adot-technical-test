import AddIcon from "@mui/icons-material/Add";
import { Button } from "../components/atoms/Button";
import { Text } from "../components/atoms/Text";
import { CardDestination } from "../components/organisms/CardDestination";

export const ListingDestinationPage = () => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <Text type="mainTitle">Destinations</Text>
        <Button label="Ajouter">
          <AddIcon sx={{ fontSize: 16 }} />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardDestination />
        <CardDestination />
        <CardDestination />
        <CardDestination />
      </div>
    </div>
  );
};
