const AddItems = () => {
  return (
    <div>
      <div className="hero min-h-screen w-11/12 md:w-2/3 mx-auto">
        <div className="hero-content rounded-3xl bg-style w-full">
         
          <div className="card shrink-0 shadow-2xl w-full">
            <form className="card-body p-0 md:p-[2rem] ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Item image link</span>
                </label>
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Photo link"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Cooking time</span>
                </label>
                <input
                  type="time"
                  name="cookingTime"
                  placeholder="Cooking time"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Details</span>
                </label>
                <textarea
                  type="text"
                  cols={10}
                  rows={5}
                  name="details"
                  placeholder="Details here"
                  className="rounded-2xl "
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn border-2 hover:border-2 hover:rounded-none rounded-2xl hover:border-black bg-black hover:bg-white hover:text-black text-white border-white btn-accent">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
