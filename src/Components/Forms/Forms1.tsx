import { FormEvent, useRef } from "react";

const Forms1 = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <>
      <br />
      <br />
      <h2>Form1</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} type="text" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="from-lable">
            Age
          </label>
          <input ref={ageRef} type="number" id="age" className="form-control" />
        </div>
        <button id="submit" className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms1;
