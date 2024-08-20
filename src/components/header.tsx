import imageLogo from "../assets/react-core-concepts.png";

export const Header = () => {
  const reactDescriptions: Array<string> = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }
  console.log(genRandomInt(1));
  console.log(reactDescriptions);
  return (
    <div>
      <header>
        <img src={imageLogo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for
          almost any app you are going to build!
        </p>
      </header>
    </div>
  );
};
