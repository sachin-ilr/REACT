import { FieldValues, useForm } from "react-hook-form";

interface formData {
  name: string;
  age: number;
}

const Forms6 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

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
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The name field is empty</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">The name is too short</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="from-lable">
            Age
          </label>
          <input
            id="age"
            className="form-control"
            type="number"
            {...register("age", { required: true })}
          />
          {errors.age?.type === "required" && (
            <p className="text-danger">Please enter age</p>
          )}
        </div>
        <button id="submit" className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms6;
