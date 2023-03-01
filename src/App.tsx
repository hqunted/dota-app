import "./App.css";
import { ProvideHeroData } from "./context/RandomHeroContext";

const App = () => {
  return (
    <ProvideHeroData>
      <App></App>
    </ProvideHeroData>
  );
};

export default App;
