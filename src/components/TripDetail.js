// components/TripDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditTrip from './EditTrip';

const TripDetail = () => {
    const [trip, setTrip] = useState({});
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrip = async () => {
            const response = await fetch(`http://localhost:9292/trips/${id}`);
            const data = await response.json();

            setTrip(data);
            setLoading(false);
        };

        fetchTrip();
    }, [id]);

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:9292/trips/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // If the trip was successfully deleted, redirect to the dashboard
            navigate('/dashboard');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {editing ? (
                <EditTrip trip={trip} setEditing={setEditing} setTrip={setTrip} />
            ) : (
                <>
                    <h2>{trip.title}</h2>
                    <p>{trip.description}</p>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TripDetail;
