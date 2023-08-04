import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numberOfEvents, setNumberOfEvents] = useState('32');

  const handleChange = (event) => {
    const value = event.target.value.toString();
    // Check if the input is not a number or is less than or equal to 0
    if (isNaN(value) || Number(value) <= 0) {
      setNumberOfEvents(''); // Clear the input field when input is invalid
      setCurrentNOE(''); // Clear the current number of events state
      setErrorAlert('Invalid input. Please enter a positive number.'); // Set the error message
    } else {
      setNumberOfEvents(value);
      setCurrentNOE(value); // Use setCurrentNOE instead of updateNumberOfEvent
      setErrorAlert(''); // Hide the error alert when input is valid
    }
  };

  return (
    <div id='number-of-events'>
      <label htmlFor="number-input">Number of Events:</label>
      <input
        type="text"
        id="number-input"
        value={numberOfEvents}
        onChange={handleChange}
        min="1"
      />
    </div>
  );
};

export default NumberOfEvents;