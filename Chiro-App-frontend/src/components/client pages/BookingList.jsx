import React, { useState, useEffect } from 'react';

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch(
      "http://localhost:8080/simplewebapp/client?id=1"
    ).then((response) => response.json())
    .then((data) => {
      setBookings(data);
      setLoading(false);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  };




  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {/* {bookings.map((booking) => (
          <li key={booking.id}>
            Date: {booking.date}, Time: {booking.time}, Name: {booking.name}, Email: {booking.email}
          </li>
        ))} */}
        <h1>{bookings.name}</h1>
      </ul>
    </div>
  );
}

export default BookingList;
