import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState('32');

  const handleChange = (event) => {
    const value = event.target.value.toString();
    setNumberOfEvents(value);
    setCurrentNOE(value); // Use setCurrentNOE instead of updateNumberOfEvents
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