import { useState } from "react";

interface Props {
  initialCount: number;
}

function Count({ initialCount }: Props) {
  const [value, setValue] = useState(initialCount);
  const handleAdd = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleSub = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleSub}>
        -
      </button>
      {value}
      <button className="btn btn-primary" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default Count;
