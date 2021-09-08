import "./styles.css";
import CharCard from "../CharCard";

const Characters = ({ characterList }) => {
  return (
    <>
      <h1>CHARACTERS</h1>

      <div className="container-card">
        {characterList.map((item) => (
          <CharCard key={item.id} character={item} />
        ))}
      </div>
    </>
  );
};

export default Characters;
