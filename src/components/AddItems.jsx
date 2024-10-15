import swal from "sweetalert";

const AddItems = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const photoUrl = form.photoUrl.value;
    const title = form.title.value;
    const price = form.price.value;
    const cookingTime = form.cookingTime.value;
    const details = form.details.value;

    const newItem = { photoUrl, title, price, cookingTime, details };
    console.log(newItem);

    fetch("http://localhost:5000/addItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Item added Successfully..!!!",
            text: "Well done...!!!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen w-11/12 md:w-2/3 mx-auto">
        <div className="hero-content rounded-3xl bg-style w-full mx-auto">
          <div className="card shrink-0 w-full">
            <form
              onSubmit={handleSubmit}
              className="card-body p-0 md:p-[2rem] "
            >
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
                <button
                  type="submit"
                  className="btn border-2 hover:border-2 hover:rounded-none rounded-2xl hover:border-black bg-black hover:bg-white hover:text-black text-white border-white btn-accent"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
