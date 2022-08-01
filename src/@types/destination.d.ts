export interface IDestination {
  id: string;
  name: string;
  address: string;
  link: string;
  citizen: string;
  hostel: string;
  income: string;
  area: string;
  selected: boolean;
}

export type DestinationsContextType = {
  destinations: IDestination[];
  destinationsSelected: IDestination[];
  addDestination: (destination: IDestination) => void;
  saveSelectedDestination: () => void;
  toggleSelectedDestination: (id: string) => void;
};
