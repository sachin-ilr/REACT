import { FormEvent, useState } from "react";

const Forms5 = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <>
      <h2>Form 5</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={person.name}
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="from-lable">
            Age
          </label>
          <input
            id="age"
            className="form-control"
            type="number"
            value={person.age}
            onChange={(event) =>
              setPerson({ ...person, age: event.target.value })
            }
          />
        </div>
        <button id="submit" className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms5;
