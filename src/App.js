import "./App.css";
import img from "./assets/slogan.png";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <figure>
          <img className="img-slogan" src={img} alt="Rick and Marty"></img>
        </figure>
      </header>
      <article className="App-content">
        <Characters characterList={characterList} />
      </article>
    </div>
  );
};

export default App;
