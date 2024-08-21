import { SetStateAction, useState } from "react";
import { CoreConcepts } from "./components/coreConcepts";
import { Header } from "./components/header";
import { TabButton } from "./components/tabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [state, setState] = useState(null);

  function handleClick(state: SetStateAction<null>) {
    setState(state);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={state === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={state === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={state === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={state === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {state === null ? (
              <p>Please select a topic.</p>
            ) : (
              <div>
                <h3>{EXAMPLES[state].title}</h3>
                <p>{EXAMPLES.components.description}</p>
                <pre>
                  <code>{EXAMPLES[state].code}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
