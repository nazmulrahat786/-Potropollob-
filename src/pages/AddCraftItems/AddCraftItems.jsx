import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddCraftItems = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg text-cyan-700"></span>
      </div>
    );
  }

  const handleAddCraftItems = (e) => {
    e.preventDefault();
    const form = e.target;

    const newPlant = {
      image: form.image.value,
      name: form.name.value,
      category: form.category.value,
      careLevel: form.careLevel.value,
      wateringFrequency: form.wateringFrequency.value,
      lastWateredDate: form.lastWateredDate.value,
      nextWateringDate: form.nextWateringDate.value,
      healthStatus: form.healthStatus.value,
      description: form.description.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch("https://potropollob-server-side.vercel.app/addplants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-cyan-800">
          Add New Plant
        </h2>

        <form onSubmit={handleAddCraftItems} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">Image URL</label>
              <input type="text" name="image" className="input input-bordered w-full" placeholder="Enter image URL" required />
            </div>

            <div>
              <label className="font-semibold">Plant Name</label>
              <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter plant name" required />
            </div>

            <div>
              <label className="font-semibold">Category</label>
              <select name="category" className="select select-bordered w-full" required>
                <option value="">Select category</option>
                <option value="Succulent">Succulent</option>
                <option value="Herb">Herb</option>
                <option value="Flowering Plant">Flowering Plant</option>
                <option value="Indoor Plant">Indoor Plant</option>
                <option value="Outdoor Plant">Outdoor Plant</option>
                <option value="Fern">Fern</option>
                <option value="Cactus">Cactus</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Care Level</label>
              <select name="careLevel" className="select select-bordered w-full" required>
                <option value="">Select care level</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Watering Frequency (in days)</label>
              <input type="number" name="wateringFrequency" className="input input-bordered w-full" placeholder="e.g. 3" required />
            </div>

            <div>
              <label className="font-semibold">Last Watered Date</label>
              <input type="date" name="lastWateredDate" className="input input-bordered w-full" required />
            </div>

            <div>
              <label className="font-semibold">Next Watering Date</label>
              <input type="date" name="nextWateringDate" className="input input-bordered w-full" required />
            </div>

            <div>
              <label className="font-semibold">Health Status</label>
              <select name="healthStatus" className="select select-bordered w-full" required>
                <option value="">Select health status</option>
                <option value="Healthy">Healthy</option>
                <option value="Needs Attention">Needs Attention</option>
                <option value="Wilting">Wilting</option>
                <option value="Infected">Infected</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">User Email</label>
              <input type="email" name="userEmail" className="input input-bordered w-full bg-gray-100" value={user?.email} readOnly />
            </div>

            <div>
              <label className="font-semibold">User Name</label>
              <input type="text" name="userName" className="input input-bordered w-full bg-gray-100" value={user?.displayName} readOnly />
            </div>
          </div>

          <div>
            <label className="font-semibold">Description</label>
            <textarea name="description" className="textarea textarea-bordered w-full" rows="4" placeholder="Write a short description..." required></textarea>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="btn bg-cyan-800 text-white text-lg px-8 hover:bg-cyan-700">
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItems;
