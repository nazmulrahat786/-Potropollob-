import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDataForm = () => {
  const formData = useLoaderData();
  const {
    _id,
    image,
    name,
    category,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userName,
    userEmail,
    description,
  } = formData;

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <p className="text-center mt-12">
        <span className="loading loading-spinner loading-lg"></span>
      </p>
    );
  }

  const handleUpdatedPlant = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedPlant = {
      name: form.name.value,
      image: form.image.value,
      category: form.category.value,
      careLevel: form.careLevel.value,
      wateringFrequency: form.wateringFrequency.value,
      lastWateredDate: form.lastWateredDate.value,
      nextWateringDate: form.nextWateringDate.value,
      healthStatus: form.healthStatus.value,
      userName: form.userName.value,
      userEmail: user?.email,
      description: form.description.value,
    };

    fetch(`https://potropollob-server-side.vercel.app/addplants/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Plant updated successfully", "success");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#f0bc8c] py-28">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto shadow-2xl bg-white rounded-2xl p-6">
          <h2 className="text-4xl font-bold text-center pb-8">
            Update Plant Info
          </h2>
          <form onSubmit={handleUpdatedPlant} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Plant Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Care Level</span>
                </label>
                <input
                  type="text"
                  name="careLevel"
                  defaultValue={careLevel}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Watering Frequency (days)
                  </span>
                </label>
                <input
                  type="number"
                  name="wateringFrequency"
                  defaultValue={wateringFrequency}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Last Watered Date
                  </span>
                </label>
                <input
                  type="date"
                  name="lastWateredDate"
                  defaultValue={lastWateredDate}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Next Watering Date
                  </span>
                </label>
                <input
                  type="date"
                  name="nextWateringDate"
                  defaultValue={nextWateringDate}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Health Status
                  </span>
                </label>
                <input
                  type="text"
                  name="healthStatus"
                  defaultValue={healthStatus}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">User Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
               value={userName}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">User Email</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={userEmail}
                  className="input input-bordered"
                  readOnly
                />
              </div>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered"
                rows="3"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-green-700 hover:bg-green-800 text-white text-lg"
              >
                Update Plant
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateDataForm;
