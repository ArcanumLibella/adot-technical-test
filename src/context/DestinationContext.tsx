/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IDestination, DestinationsContextType } from "../@types/destination";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

export const DestinationsContext =
  createContext<DestinationsContextType | null>(null); // initialisation du context

const DestinationsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [destinations, setDestinations] = useState<IDestination[]>([
    {
      id: "1",
      name: "New-York",
      address: "New York, NY 10004, United States",
      link: "https://www.nyc.fr/wp-content/uploads/2015/07/New_York_City-scaled.jpg",
      citizen: "20",
      hostel: "13",
      income: "4000",
      area: "12000",
      selected: true,
    },
    {
      id: "2",
      name: "Paris",
      address: "8 boulevard de Courcelles 75008 PARIS",
      link: "https://cdn-imgix.headout.com/tour/26082/TOUR-IMAGE/8278d227-6f79-48a9-a9b1-629583fd026a-13663-paris-skip-the-line-versailles-palace-tour---louvre-museum-ticket-03.jpg?auto=compress%2Cformat&h=573&q=75&fit=crop&ar=16%3A9&fm=webp",
      citizen: "10",
      hostel: "12",
      income: "3000",
      area: "10000",
      selected: false,
    },
  ]);
  const [destinationsSelected, setDestinationsSelected] = useLocalStorage(
    "destinationsStocked",
    [],
  );

  const addDestination = (destination: IDestination) => {
    const newDestination: IDestination = {
      id: uuidv4(),
      name: destination.name,
      address: destination.address,
      link: destination.link,
      citizen: destination.citizen,
      hostel: destination.hostel,
      income: destination.income,
      area: destination.area,
      selected: destination.selected,
    };
    setDestinations([...destinations, newDestination]);
  };

  const saveSelectedDestination = () => {
    const selectedDestinations = destinations.filter(
      (destination: IDestination) => destination.selected === true,
    );
    setDestinationsSelected([...selectedDestinations]);
  };

  // TODO:
  const toggleSelectedDestination = (id: string) => {
    console.log(id);
  };

  return (
    <DestinationsContext.Provider
      value={{
        destinations,
        destinationsSelected,
        addDestination,
        saveSelectedDestination,
        toggleSelectedDestination,
      }}
    >
      {children}
    </DestinationsContext.Provider>
  );
};

export default DestinationsContextProvider;
