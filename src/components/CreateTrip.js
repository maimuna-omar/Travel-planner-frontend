// import React, { useState } from 'react';

// const CreateTrip = ({ fetchTrips }) => {
//   const [formData, setFormData] = useState({
//     destination: '',
//     travel_mode: '',
//     budget: '',
//     start_date: '',
//     end_date: '',
//     notes: '',
//     image_url: '',
//     trip_status: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userId = localStorage.getItem('userId');

//     const response = await fetch(`http://localhost:9292/users/${userId}/trips`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       // Clear form
//       setFormData({
//         destination: '',
//         travel_mode: '',
//         budget: '',
//         start_date: '',
//         end_date: '',
//         notes: '',
//         image_url: '',
//         trip_status: ''
//       });
//       // Fetch trips again after successful creation
//       fetchTrips();
//     } else {
//       console.error('Failed to create trip');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Destination:
//         <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
//       </label>
//       <label>
//         Travel Mode:
//         <input type="text" name="travel_mode" value={formData.travel_mode} onChange={handleChange} />
//       </label>
//       <label>
//         Budget:
//         <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
//       </label>
//       <label>
//         Start Date:
//         <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
//       </label>
//       <label>
//         End Date:
//         <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
//       </label>
//       <label>
//         Notes:
//         <textarea name="notes" value={formData.notes} onChange={handleChange} />
//       </label>
//       <label>
//         Image URL:
//         <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
//       </label>
//       <label>
//         Trip Status:
//         <select name="trip_status" value={formData.trip_status} onChange={handleChange}>
//           <option value="">Select...</option>
//           <option value="upcoming">Upcoming</option>
//           <option value="past">Past</option>
//           {/* <option value="cancelled">Cancelled</option> */}
//         </select>
//       </label>
//       <button type="submit">Create Trip</button>
//     </form>
//   );
// };

// export default CreateTrip;


import React, { useState } from 'react';
import './CreateTrip.css';

const CreateTrip = ({ fetchTrips }) => {
  const [formData, setFormData] = useState({
    destination: '',
    travel_mode: '',
    budget: '',
    start_date: '',
    end_date: '',
    notes: '',
    image_url: '',
    trip_status: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');

    const response = await fetch(`http://localhost:9292/users/${userId}/trips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Clear form
      setFormData({
        destination: '',
        travel_mode: '',
        budget: '',
        start_date: '',
        end_date: '',
        notes: '',
        image_url: '',
        trip_status: ''
      });
      // Fetch trips again after successful creation
      fetchTrips();
    } else {
      console.error('Failed to create trip');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card"> 
    <h1>CREATE TRIPS!</h1>
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
          </select>
        </label>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
};

export default CreateTrip;
