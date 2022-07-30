import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Switch, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { SharedTemplate } from "./components/templates";
import { ListingDestinationPage } from "./pages/ListingDestinationPage";
import { Text } from "./components/atoms/Text";
import { Box } from "./components/molecules/Box";
import { Button } from "./components/atoms/Button";

export type destinationValuesProps = {
  id: string;
  name: string;
  address: string;
  link: string;
  citizen: string;
  hostel: string;
  income: string;
  area: string;
};

const destinationValues: destinationValuesProps[] = [
  {
    id: "1",
    name: "New-York",
    address: "New York, NY 10004, United States",
    link: "https://www.nyc.fr/wp-content/uploads/2015/07/New_York_City-scaled.jpg",
    citizen: "20",
    hostel: "13",
    income: "4000€",
    area: "12000",
  },
  {
    id: "2",
    name: "Paris",
    address: "8 boulevard de Courcelles 75008 PARIS",
    link: "https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg",
    citizen: "10",
    hostel: "12",
    income: "3000€",
    area: "10000",
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [destinations, setDestinations] = useState(destinationValues);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [link, setLink] = useState("");
  const [citizen, setCitizen] = useState("");
  const [hostel, setHostel] = useState("");
  const [income, setIncome] = useState("");
  const [area, setArea] = useState("");

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  //   setAddress(e.target.value);
  //   setLink(e.target.value);
  //   // setCitizen(e.target.value);
  //   // setHostel(e.target.value);
  //   // setIncome(e.target.value);
  //   // setArea(e.target.value);
  // };

  const handleAdd = () => {
    const newDestinations = {
      id: uuidv4(),
      name,
      address,
      link,
      citizen,
      hostel,
      income,
      area,
    };
    setDestinations([...destinations, newDestinations]);
    setName("");
    setAddress("");
    setLink("");
    setCitizen("");
    setHostel("");
    setIncome("");
    setArea("");
    setOpen(false);
  };

  return (
    <div className="App h-screen bg-slate-100">
      <SharedTemplate>
        <ListingDestinationPage
          onOpenModal={() => setOpen(true)}
          destinations={destinations}
        />
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <form onSubmit={handleSubmit(handleFormSubmit)}> */}
          <Box>
            <Text type="modalTitle" id="modal-modal-title">
              Ajouter une nouvelle destination :
            </Text>
            <div>
              <TextField
                id="name"
                value={name}
                label="Nom de la destination"
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                type="text"
                size="small"
                fullWidth
                variant="filled"
                required
              />
              <TextField
                id="address"
                value={address}
                label="Adresse"
                onChange={(e) => setAddress(e.target.value)}
                autoFocus
                margin="normal"
                type="text"
                size="small"
                fullWidth
                variant="filled"
                required
              />
              <TextField
                id="link"
                value={link}
                label="Lien de l'image"
                onChange={(e) => setLink(e.target.value)}
                margin="normal"
                type="url"
                size="small"
                fullWidth
                variant="filled"
                required
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TextField
                  id="citizen"
                  value={citizen}
                  label="Nb habitants"
                  onChange={(e) => setCitizen(e.target.value)}
                  margin="normal"
                  type="text"
                  size="small"
                  variant="filled"
                />
                <TextField
                  id="hostel"
                  value={hostel}
                  label="Nb hôtels"
                  onChange={(e) => setHostel(e.target.value)}
                  margin="normal"
                  type="text"
                  size="small"
                  variant="filled"
                />
                <TextField
                  id="income"
                  value={income}
                  label="Revenu moyen"
                  onChange={(e) => setIncome(e.target.value)}
                  margin="normal"
                  type="text"
                  size="small"
                  variant="filled"
                />
                <TextField
                  id="area"
                  value={area}
                  label="Area"
                  onChange={(e) => setArea(e.target.value)}
                  margin="normal"
                  type="text"
                  size="small"
                  variant="filled"
                />
              </div>
              <Switch color="secondary" />
            </div>
            <div className="flex mt-10 justify-end">
              <Button
                onClick={() => setOpen(false)}
                label="Cancel"
                type="secondary"
              />
              <Button onClick={handleAdd} label="Confirm" type="ternary" />
            </div>
          </Box>
          {/* </form> */}
        </Modal>
      </SharedTemplate>
    </div>
  );
};

export default App;
