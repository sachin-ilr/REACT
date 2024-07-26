const Form = () => {
  return (
    <>
      <form id="form">
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" id="desc" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amt" className="form-label">
            Amount
          </label>
          <input type="text" id="amt" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="catg" className="form-label">
            Category
          </label>
          <input type="text" id="catg" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
