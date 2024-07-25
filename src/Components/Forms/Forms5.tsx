import { FormEvent, useState } from "react";

const Forms5 = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });

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
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            type="text"
            id="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="from-lable">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
            type="number"
            id="age"
            className="form-control"
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
