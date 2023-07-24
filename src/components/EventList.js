// src/components/EventList.js

import Event from "./Event";

const EventList = ({ events }) => {
    return (
      <ul id="event-list">
        {events ? (
          events.map(event => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))
        ) : (
          <li>No events found.</li>
        )}
      </ul>
    );
  };


export default EventList;