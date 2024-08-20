import { CoreConcepts } from "./components/coreConcepts";
import { Header } from "./components/header";
import { TabButton } from "./components/tabButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  function handleClick() {
    console.log("a");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />

            <CoreConcepts {...CORE_CONCEPTS[1]} />

            <CoreConcepts {...CORE_CONCEPTS[2]} />

            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
