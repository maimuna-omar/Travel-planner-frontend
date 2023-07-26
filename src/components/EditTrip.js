// import React, { useState } from 'react';

// const EditTrip = ({ trip, setEditing }) => {

//   const [formData, setFormData] = useState({
//     destination: trip.destination,
//     travel_mode: trip.travel_mode,
//     budget: trip.budget,
//     start_date: trip.start_date,
//     end_date: trip.end_date,
//     notes: trip.notes,
//     image_url: trip.image_url,
//     trip_status: trip.trip_status
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(`http://localhost:9292/trips/${trip.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (data.id) {
//       setEditing(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Trip</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Destination:
//           <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
//         </label>
//         <label>
//           Travel Mode:
//           <input type="text" name="travel_mode" value={formData.travel_mode} onChange={handleChange} />
//         </label>
//         <label>
//           Budget:
//           <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
//         </label>
//         <label>
//           Start Date:
//           <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
//         </label>
//         <label>
//           End Date:
//           <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
//         </label>
//         <label>
//           Notes:
//           <textarea name="notes" value={formData.notes} onChange={handleChange} />
//         </label>
//         <label>
//           Image URL:
//           <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
//         </label>
//         <label>
//           Trip Status:
//           <select name="trip_status" value={formData.trip_status} onChange={handleChange}>
//             <option value="">Select...</option>
//             <option value="upcoming">Upcoming</option>
//             <option value="past">Past</option>
//             {/* <option value="cancelled">Cancelled</option> */}
//           </select>
//         </label>
//         <button type="submit">Update Trip</button>
//       </form>
//     </div>
//   );
// };

// export default EditTrip;


// EditTrip.js

import React, { useState } from 'react';
import './EditTrip.css';

const EditTrip = ({ trip, setEditing }) => {
  const [formData, setFormData] = useState({
    destination: trip.destination,
    travel_mode: trip.travel_mode,
    budget: trip.budget,
    start_date: trip.start_date,
    end_date: trip.end_date,
    notes: trip.notes,
    image_url: trip.image_url,
    trip_status: trip.trip_status,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:9292/trips/${trip.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.id) {
      setEditing(false);
    }
  };

  return (
    <div className="card">
      <h2>Edit Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Destination:
          <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
        </label>
        <label>
          Travel Mode:
          <input type="text" name="travel_mode" value={formData.travel_mode} onChange={handleChange} />
        </label>
        <label>
          Budget:
          <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
        </label>
        <label>
          End Date:
          <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
        </label>
        <label>
          Notes:
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
        </label>
        <label>
          Trip Status:
          <select name="trip_status" value={formData.trip_status} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            {/* <option value="cancelled">Cancelled</option> */}
          </select>
        </label>
        <button type="submit">Update Trip</button>
      </form>
    </div>
  );
};

export default EditTrip;
