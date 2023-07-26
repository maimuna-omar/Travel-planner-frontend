// Dashboard.js
import React, { useState } from 'react';
import CreateTrip from './CreateTrip';
import PastTrips from './PastTrips';
import UpcomingTrips from './UpcomingTrips';
import EditTrip from './EditTrip';
// import './Dashboard.css';

const Dashboard = ({ fetchTrips, pastTrips, setPastTrips, upcomingTrips, setUpcomingTrips, loading }) => {
  const [editTrip, setEditTrip] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <CreateTrip fetchTrips={fetchTrips} />
      {editTrip 
        ? <EditTrip trip={editTrip} setEditing={setEditTrip} fetchTrips={fetchTrips} /> 
        : <>
            <PastTrips trips={pastTrips} setPastTrips={setPastTrips} setEditing={setEditTrip} fetchTrips={fetchTrips} />
            <UpcomingTrips trips={upcomingTrips} setUpcomingTrips={setUpcomingTrips} setEditing={setEditTrip} fetchTrips={fetchTrips} />
          </>
      }
    </div>
  );
}

export default Dashboard;
