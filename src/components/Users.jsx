import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  const [users, setUserData] = useState(data);

  const handleUserDeleteBtn = (user) => {
    swal({
      title: "Are you sure?",
      text: "Please make sure before deleting...!!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://adda-ghor-backend-e7uhx4v5w-tr-tauhids-projects.vercel.app/users/${user.uid}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal(`Poof! The user ${user.name} has been deleted!`, {
                icon: "success",
              });
              setUserData(
                users.filter((deletedUser) => deletedUser.uid !== user.uid)
              );
            }
          });
      } else {
        swal("The user is not deleted...!!!");
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Home | Users</title>
      </Helmet>

      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-center my-4">
          Users count: {users.length}
        </h1>
        {users.map((user, key) => {
          return (
            <div
              className="hero-content justify-start flex-col lg:flex-row w-11/12 mx-auto bg-blur my-5 rounded-3xl shadow-inner text-shadow-3px text-left"
              key={key}
            >
              <div className="text-5xl font-bold md:w-1/12">
                <h1>{key + 1}.</h1>
              </div>
              <div className="avatar md:w-3/12 flex justify-center">
                <div className="mask mask-squircle w-24">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="User Avatar"
                  />
                </div>
              </div>
              <div className="md:w-8/12">
                <h1 className="text-4xl font-bold">
                  <span className="text-2xl">User name: </span>
                  {user?.name}
                </h1>
                <p className="py-6">UID : {user?.uid}</p>
                <p className="py-6">Email : {user?.email}</p>
              </div>

              <div className="lg:mr-5">
                <button
                  className="grow btn btn-ghost border-4 py-4 h-auto border-white hover:border-black bg-black hover:bg-white hover:text-black"
                  onClick={() => {
                    handleUserDeleteBtn(user);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
