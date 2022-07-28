import { SharedTemplate } from "./components/templates";
import { ListingDestinationPage } from "./pages/ListingDestinationPage";

const App = () => {
  return (
    <div className="App h-screen bg-slate-100">
      <SharedTemplate>
        <ListingDestinationPage />
      </SharedTemplate>
    </div>
  );
};

export default App;
