

// import React, { useState } from 'react';
// import EditTrip from './EditTrip';

// const PastTrips = ({ trips, setPastTrips, fetchTrips }) => {
//   const [editing, setEditing] = useState(false);
//   const [currentTrip, setCurrentTrip] = useState(null);

//   const handleEdit = (trip) => {
//     setEditing(true);
//     setCurrentTrip(trip);
//   }

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this trip?")) {
//       const response = await fetch(`http://localhost:9292/trips/${id}`, {
//           method: 'DELETE',
//       });

//       if (response.ok) {
//         response.json().then(() => {
//           const updatedTrips = trips.filter(trip => trip.id !== id);
//           setPastTrips(updatedTrips);
//         });
//       }
//     }
//   };

//   if (editing) {
//     return <EditTrip trip={currentTrip} setEditing={setEditing} fetchTrips={fetchTrips} />;
//   }

//   return (
//     <div>
//       <h2>Past Trips</h2>
//       {trips.map(trip => (
//         <div key={trip.id}>
//           <h3>{trip.destination}</h3>
//           <p>Start Date: {trip.start_date}</p>
//           <p>End Date: {trip.end_date}</p>
//           <p>Travel Mode: {trip.travel_mode}</p>
//           <p>Budget: {trip.budget}</p>
//           <p>{trip.notes}</p>
//           <button onClick={() => handleEdit(trip)}>Edit</button>
//           <button onClick={() => handleDelete(trip.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PastTrips;

// PastTrips.js

import React, { useState } from 'react';
import EditTrip from './EditTrip';
import './PastTrips.css';

const PastTrips = ({ trips, setPastTrips, fetchTrips }) => {
  const [editing, setEditing] = useState(false);
  const [currentTrip, setCurrentTrip] = useState(null);

  const handleEdit = (trip) => {
    setEditing(true);
    setCurrentTrip(trip);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      const response = await fetch(`http://localhost:9292/trips/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedTrips = trips.filter((trip) => trip.id !== id);
        setPastTrips(updatedTrips);
      }
    }
  };

  if (editing) {
    return <EditTrip trip={currentTrip} setEditing={setEditing} fetchTrips={fetchTrips} />;
  }

  return (
    <div className="card">
      <h2>Past Trips</h2>
      {trips.map((trip) => (
        <div key={trip.id} className="trip-info">
          <h3>{trip.destination}</h3>
          <p>Start Date: {trip.start_date}</p>
          <p>End Date: {trip.end_date}</p>
          <p>Travel Mode: {trip.travel_mode}</p>
          <p>Budget: {trip.budget}</p>
          <p>{trip.notes}</p>
          <div className="edit-delete-btns">
            <button className="edit-btn" onClick={() => handleEdit(trip)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(trip.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastTrips;

