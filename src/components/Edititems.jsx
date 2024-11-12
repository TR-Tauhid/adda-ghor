import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Edititems = () => {
  const { notifyError } = useContext(AuthContext);
  const data = useLoaderData();
  const [menuItems, setMenuItem] = useState(data);
  const [updatingItem, setUpdatingItem] = useState(1);

  const handleError = (message) => {
    notifyError(message);
  };

  // Adding items to database

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photoUrl.value;
    const title = form.title.value;
    const price = form.price.value;
    const cookingTime = form.cookingTime.value;
    const details = form.details.value;

    const newItem = { photoUrl, title, price, cookingTime, details };

    fetch("https://adda-ghor-backend-tr-tauhids-projects.vercel.app/editItems", {
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
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  // Updating items to database

  const handleUpdateItemForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const photoUrl = form.get("photoUrl");
    const title = form.get("title");
    const price = form.get("price");
    const cookingTime = form.get("cookingTime");
    const details = form.get("details");

    const updatedItem = { photoUrl, title, price, cookingTime, details };

    fetch(`https://adda-ghor-backend-tr-tauhids-projects.vercel.app/editItems/${updatingItem?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount === 1) {
          document.getElementById("update_item_modal").close();
          fetch("https://adda-ghor-backend-tr-tauhids-projects.vercel.app/menus")
            .then((res) => res.json())
            .then((data) => {
              setMenuItem(data);
            });
          swal({
            title: "Item added Successfully..!!!",
            text: "Well done...!!!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  // Delete Item

  const deleteItem = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://adda-ghor-backend-tr-tauhids-projects.vercel.app/editItems/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Poof! Your item has been deleted!", {
                icon: "success",
              });

              setMenuItem((menuItems) =>
                menuItems.filter((item) => item._id !== _id)
              );
            }
          });
      } else {
        swal("Your item is safe!");
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Home | Edit Items</title>
      </Helmet>

      {/* Model for updating*/}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        id="update_item_modal"
        className="filter-15 modal modal-bottom sm:modal-middle w-11/12 md:w-auto mx-auto"
      >
        <div className="modal-box bg-style">
          <div className="modal-action justify-center">
            <div className="card shrink-0 w-full">
              <form
                method="dialog"
                onSubmit={handleUpdateItemForm}
                className="card-body p-0 md:p-[2rem] md:pt-0"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Item image link
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    placeholder="Photo url"
                    defaultValue={updatingItem?.photoUrl}
                    className="input input-bordered"
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
                    defaultValue={updatingItem?.title}
                    className="input input-bordered"
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
                    defaultValue={updatingItem?.price}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      Cooking time in minutes
                    </span>
                  </label>
                  <input
                    type="number"
                    name="cookingTime"
                    placeholder="Cooking Time"
                    defaultValue={updatingItem?.cookingTime}
                    className="input input-bordered"
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
                    placeholder="Details"
                    defaultValue={updatingItem?.details}
                    className="rounded-2xl "
                  />
                </div>

                <div className="flex w-full justify-around">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("update_item_modal").close();
                      setUpdatingItem(null);
                    }}
                    className="w-4/12 btn btn-ghost border-4 my-5 py-4 h-auto border-white hover:border-black bg-black hover:bg-white hover:text-black"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-4/12 btn btn-ghost border-4 my-5 py-4 h-auto border-white hover:border-black bg-black hover:bg-white hover:text-black"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>

      {/* Adding items  */}

      <div className="hero min-h-screen w-11/12 md:w-2/3 mx-auto mt-5">
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
                  <span className="label-text text-white">
                    Cooking time in minutes
                  </span>
                </label>
                <input
                  type="number"
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

      {/* Updating items */}

      <div className="w-11/12 mx-auto rounded-full py-5 text-3xl text-center my-8 bg-style ">
        <h2>Menu items: {menuItems.length}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5 my-4 md:my-10 mx-auto w-11/12">
        {menuItems.map((item, key) => {
          return (
            <div
              key={key}
              className="card bg-transparent glass md:card-side shadow-xl outline outline-4 outline-white bg-style"
            >
              <figure>
                <img src={`${item?.photoUrl}`} alt={`${item?.title}`} />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center md:justify-normal">{`${item?.title}`}</h2>
                <h2>Cooking time {`${item?.cookingTime} minutes`}</h2>
                <p>{`${item?.details}`}</p>

                <div className="card-actions flex justify-around">
                  <button
                    className="grow btn btn-ghost border-4 py-4 h-auto border-white hover:border-black bg-black hover:bg-white hover:text-black"
                    onClick={() => {
                      deleteItem(item?._id);
                    }}
                  >
                    Delete
                  </button>

                  <button
                    className="grow btn btn-ghost border-4 py-4 h-auto border-white hover:border-black bg-black hover:bg-white hover:text-black"
                    onClick={() => {
                      document.getElementById("update_item_modal").showModal();
                      setUpdatingItem(item);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Edititems;
