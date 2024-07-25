import { FieldValues, useForm } from "react-hook-form";

const Forms6 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <h2>Form 6</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            {...register("name")}
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
            {...register("age")}
          />
        </div>
        <button id="submit" className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms6;
