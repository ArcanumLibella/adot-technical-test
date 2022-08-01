import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Switch, TextField } from "@mui/material";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { DestinationsContextType } from "../../../@types/destination";
import { Box } from "../../molecules/Box";
import { DestinationsContext } from "../../../context/DestinationContext";

export type AddDestinationFormProps = {
  onOpenModal: () => void;
};

export const AddDestinationForm = ({
  onOpenModal,
}: AddDestinationFormProps) => {
  const { addDestination, saveSelectedDestination } = useContext(
    DestinationsContext,
  ) as DestinationsContextType;

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
    addDestination(values);
    saveSelectedDestination();
    onOpenModal();
    reset();
  };

  return (
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
          <Button onClick={onOpenModal} label="Cancel" type="secondary" />
          <Button submit label="Confirm" type="ternary" />
        </div>
      </Box>
    </form>
  );
};
