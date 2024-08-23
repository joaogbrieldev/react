import { CoreConcepts } from "./components/coreConcepts";
import { Examples } from "./components/examples";
import { Header } from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
