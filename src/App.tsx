import { SharedTemplate } from "./components/templates";
import { ListingDestinationPage } from "./pages/ListingDestinationPage";

const App = () => {
  return (
    <div className="App px-4 max-w-6xl mx-auto">
      <SharedTemplate>
        <ListingDestinationPage />
      </SharedTemplate>
    </div>
  );
};

export default App;
