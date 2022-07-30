import AddIcon from "@mui/icons-material/Add";
import { destinationValuesProps } from "../App";
import { Button } from "../components/atoms/Button";
import { Text } from "../components/atoms/Text";
import { CardDestination } from "../components/organisms/CardDestination";

export type ListingDestinationPageProps = {
  // onSubmit: (values: RejectBeneficiaryFormValues) => void;
  destinations: destinationValuesProps[];
  onOpenModal: () => void;
};

// export type destinationValuesProps = {
//   id: number;
//   name: string;
//   address: string;
//   link: string;
//   citizen: number;
//   hostel: number;
//   income: number;
//   area: number;
// };

// const destinationValues: destinationValuesProps[] = [
//   {
//     id: 1,
//     name: "New-York",
//     address: "New York, NY 10004, United States",
//     link: "https://www.nyc.fr/wp-content/uploads/2015/07/New_York_City-scaled.jpg",
//     citizen: 20,
//     hostel: 13,
//     income: 4000,
//     area: 12000,
//   },
//   {
//     id: 2,
//     name: "Paris",
//     address: "8 boulevard de Courcelles 75008 PARIS",
//     link: "https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg",
//     citizen: 10,
//     hostel: 12,
//     income: 3000,
//     area: 10000,
//   },
// ];

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
          <CardDestination key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};
