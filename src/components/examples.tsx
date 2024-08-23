import { SetStateAction, useState } from "react";
import { EXAMPLES } from "../data";
import { TabButton } from "./tabButton";
import { Tabs } from "./tabs";

export const Examples = () => {
  const [state, setState] = useState(null);

  function handleClick(state: SetStateAction<null>) {
    setState(state);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu></menu>
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </section>
  );
};
