import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Switch, TextField } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
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
  selected: boolean;
};

const initialValues: destinationValuesProps[] = [
  {
    id: "1",
    name: "New-York",
    address: "New York, NY 10004, United States",
    link: "https://www.nyc.fr/wp-content/uploads/2015/07/New_York_City-scaled.jpg",
    citizen: "20",
    hostel: "13",
    income: "4000€",
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
    income: "3000€",
    area: "10000",
    selected: false,
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [destinations, setDestinations] = useState(initialValues);

  const formMethods = useForm({
    mode: "onSubmit",
    defaultValues: {
      id: "",
      name: "",
      address: "",
      link: "",
      citizen: "",
      hostel: "",
      income: "",
      area: "",
      selected: false,
    },
  });

  const { register, handleSubmit, reset } = formMethods;

  const onSubmit = () => {
    const values = formMethods.getValues();
    console.log(values);
    setDestinations([...destinations, values]);
    setOpen(false);
    reset();
  };

  console.log("Destinations : ", destinations);

  return (
    <div className="App h-full min-h-screen bg-slate-100">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Text type="modalTitle" id="modal-modal-title">
                Ajouter une nouvelle destination :
              </Text>
              <div>
                <TextField
                  id="name"
                  label="Nom de la destination"
                  {...register("name")}
                  margin="normal"
                  type="text"
                  size="small"
                  fullWidth
                  variant="filled"
                  required
                />
                <TextField
                  id="address"
                  label="Adresse"
                  {...register("address")}
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
                  label="Lien de l'image"
                  {...register("link")}
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
                    label="Nb habitants"
                    {...register("citizen")}
                    margin="normal"
                    type="text"
                    size="small"
                    variant="filled"
                    required
                  />
                  <TextField
                    id="hostel"
                    label="Nb hôtels"
                    {...register("hostel")}
                    margin="normal"
                    type="text"
                    size="small"
                    variant="filled"
                    required
                  />
                  <TextField
                    id="income"
                    label="Revenu moyen"
                    {...register("income")}
                    margin="normal"
                    type="text"
                    size="small"
                    variant="filled"
                    required
                  />
                  <TextField
                    id="area"
                    label="Area"
                    {...register("area")}
                    margin="normal"
                    type="text"
                    size="small"
                    variant="filled"
                    required
                  />
                </div>
                <Switch color="secondary" {...register("selected")} />
              </div>
              <div className="flex mt-10 justify-end">
                <Button
                  onClick={() => setOpen(false)}
                  label="Cancel"
                  type="secondary"
                />
                <Button submit label="Confirm" type="ternary" />
              </div>
            </Box>
          </form>
        </Modal>
      </SharedTemplate>
    </div>
  );
};

export default App;
