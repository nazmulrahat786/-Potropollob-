import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {
  const navigate = useNavigate();
  const formData = useLoaderData();

  const {
    _id,
    image,
    name,
    category: initialCategory,
    careLevel: initialCareLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus: initialHealthStatus,
    userName,
    userEmail,
    description,
  } = formData;

  const { user, loading } = useContext(AuthContext);

  // Controlled states for dropdowns
  const [category, setCategory] = useState(initialCategory || '');
  const [careLevel, setCareLevel] = useState(initialCareLevel || '');
  const [healthStatus, setHealthStatus] = useState(initialHealthStatus || '');

  if (loading) {
    return (
      <p className="text-center mt-12">
        <span className="loading loading-spinner loading-lg"></span>
      </p>
    );
  }

  // Format date to YYYY-MM-DD
  const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  const handleUpdatedPlant = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedPlant = {
      name: form.name.value,
      image: form.image.value,
      category: category,
      careLevel: careLevel,
      wateringFrequency: form.wateringFrequency.value,
      lastWateredDate: form.lastWateredDate.value,
      nextWateringDate: form.nextWateringDate.value,
      healthStatus: healthStatus,
      userName: form.userName.value,
      userEmail: user?.email,
      description: form.description.value,
    };

    fetch(`https://potropollob-server-side.vercel.app/addplants/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success!', 'Plant updated successfully', 'success');
          navigate('/dashboard/my-plants');
        } else {
          Swal.fire('Notice', 'No changes were made.', 'info');
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire('Error', 'Something went wrong', 'error');
      });
  };

  return (
   <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto shadow-2xl bg-white rounded-2xl p-6">
  <h2 className="text-4xl font-bold text-center pb-8">Update Plant Info</h2>
  <form onSubmit={handleUpdatedPlant} className="card-body">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Plant Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Plant Name</span>
        </label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Image URL */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Image URL</span>
        </label>
        <input
          type="text"
          name="image"
          defaultValue={image}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Category Dropdown */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Category</span>
        </label>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full"
          required
        >
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

      {/* Care Level Dropdown */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Care Level</span>
        </label>
        <select
          name="careLevel"
          value={careLevel}
          onChange={(e) => setCareLevel(e.target.value)}
          className="select select-bordered w-full"
          required
        >
          <option value="">Select care level</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Watering Frequency */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Watering Frequency (days)</span>
        </label>
        <input
          type="number"
          name="wateringFrequency"
          defaultValue={wateringFrequency}
          className="input input-bordered w-full"
          min="1"
          required
        />
      </div>

      {/* Last Watered Date */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Last Watered Date</span>
        </label>
        <input
          type="date"
          name="lastWateredDate"
          defaultValue={formatDate(lastWateredDate)}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Next Watering Date */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Next Watering Date</span>
        </label>
        <input
          type="date"
          name="nextWateringDate"
          defaultValue={formatDate(nextWateringDate)}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Health Status Dropdown */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Health Status</span>
        </label>
        <select
          name="healthStatus"
          value={healthStatus}
          onChange={(e) => setHealthStatus(e.target.value)}
          className="select select-bordered w-full"
          required
        >
          <option value="">Select health status</option>
          <option value="Healthy">Healthy</option>
          <option value="Needs Attention">Needs Attention</option>
          <option value="Wilting">Wilting</option>
          <option value="Infected">Infected</option>
        </select>
      </div>

      {/* User Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">User Name</span>
        </label>
        <input
          type="text"
          name="userName"
          value={userName}
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          readOnly
        />
      </div>

      {/* User Email */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">User Email</span>
        </label>
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          readOnly
        />
      </div>
    </div>

    {/* Description */}
    <div className="form-control mt-6">
      <label className="label">
        <span className="label-text font-semibold">Description</span>
      </label>
      <textarea
        name="description"
        defaultValue={description}
        className="textarea textarea-bordered w-full"
        rows={3}
        required
      />
    </div>

    {/* Submit Button */}
    <div className="form-control mt-8">
      <button
        type="submit"
        className="btn bg-green-700 hover:bg-green-800 text-white text-lg"
      >
        Update Plant
      </button>
    </div>
  </form>
</div>

  );
};

export default Update;
