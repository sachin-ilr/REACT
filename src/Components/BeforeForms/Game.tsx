interface Props {
  onChange: () => void;
}

const Game = ({ onChange }: Props) => {
  return (
    <div>
      <button onClick={onChange}>Change Name</button>
    </div>
  );
};

export default Game;
