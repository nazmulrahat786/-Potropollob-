import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddCraftItems  = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <p className="text-center mt-12">
        <span className="loading loading-spinner loading-lg"></span>
      </p>
    );
  }

  const handleAddCraftItems  = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const name = form.name.value;
    const category = form.category.value;
    const careLevel = form.careLevel.value;
    const wateringFrequency = form.wateringFrequency.value;
    const lastWateredDate = form.lastWateredDate.value;
    const nextWateringDate = form.nextWateringDate.value;
    const healthStatus = form.healthStatus.value;
    const description = form.description.value;
    const userEmail = user?.email;
    const userName = user?.displayName;

    const newPlant = {
      image,
      name,
      category,
      careLevel,
      wateringFrequency,
      lastWateredDate,
      nextWateringDate,
      healthStatus,
      userEmail,
      userName,
      description,
    };

    // Send to backend
    fetch("https://potropollob-server-side.vercel.app/addplants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Plant added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          }).then(() => form.reset());
        }
      });
  };

  return (
    <div>
      
      <div className="bg-white py-12 md:py-20">
        <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto shadow-2xl bg-base-100 rounded-2xl">
          <h2 className="text-4xl font-bold text-center pt-12">Add Plant</h2>
          <form onSubmit={handleAddCraftItems } className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Image URL</span>
                </label>
                <input type="text" name="image" placeholder="Enter image URL" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Plant Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter plant name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Category</span>
                </label>
                <input type="text" name="category" placeholder="e.g. succulent, herb..." className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Care Level</span>
                </label>
                <input type="text" name="careLevel" placeholder="easy / medium / hard" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Watering Frequency (in days)</span>
                </label>
                <input type="number" name="wateringFrequency" placeholder="e.g. 3" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Last Watered Date</span>
                </label>
                <input type="date" name="lastWateredDate" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Next Watering Date</span>
                </label>
                <input type="date" name="nextWateringDate" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">Health Status</span>
                </label>
                <input type="text" name="healthStatus" placeholder="e.g. Healthy / Needs Attention" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">User Email</span>
                </label>
                <input type="email" name="userEmail" defaultValue={user?.email} readOnly className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">User Name</span>
                </label>
                <input type="text" name="userName" defaultValue={user?.displayName} readOnly className="input input-bordered" />
              </div>

            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold text-base">Description</span>
              </label>
              <textarea name="description" placeholder="Write a short description..." className="textarea textarea-bordered" required></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-cyan-800 text-white text-lg">Add Plant</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default AddCraftItems ;
