// src/components/Event.js
import React, { useState } from 'react';


const Event = ({ event }) => { // Destructure the 'event' prop correctly
 const [collapsed, setCollapsed] = useState(true);

 const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
 };



  return (
    <div className='event' id='event'>
      <h2 className='title' style={{ fontWeight: 'bold' }}>Title: {event.summary}</h2>
      <p className='shortInfo'> {event.start.dateTime} ({event.start.timeZone})</p>
      <p className='shortInfo'> @{event.summary}|{event.location}</p>
      <button className='detailsButton'onClick={toggleCollapse}> {collapsed ?'Show details': 'Hide details'} </button>
      {!collapsed && (
        <div className = "details">
          <p> About the event: {event.description}</p>
        </div>
      )}
      
    </div>
    
  );
};

export default Event;