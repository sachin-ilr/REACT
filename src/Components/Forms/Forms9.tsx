import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age is mandatory" })
    .min(18, { message: "User must be above the age of 18" }),
});

type FormData = z.infer<typeof schema>;

const Forms9 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="from-lable">
            Age
          </label>
          <input
            id="age"
            className="form-control"
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button
          disabled={!isValid}
          id="submit"
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms9;
