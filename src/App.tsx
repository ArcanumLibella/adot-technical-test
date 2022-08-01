import { useState } from "react";
import Modal from "@mui/material/Modal";
import { SharedTemplate } from "./components/templates";
import { ListingDestinationPage } from "./pages/ListingDestinationPage";
import DestinationContextProvider from "./context/DestinationContext";
import { AddDestinationForm } from "./components/organisms/AddDestinationForm/AddDestinationForm";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App h-full min-h-screen bg-slate-100">
      <DestinationContextProvider>
        <SharedTemplate>
          <ListingDestinationPage onOpenModal={() => setOpen(true)} />
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <AddDestinationForm onOpenModal={() => setOpen(false)} />
          </Modal>
        </SharedTemplate>
      </DestinationContextProvider>
    </div>
  );
};

export default App;
