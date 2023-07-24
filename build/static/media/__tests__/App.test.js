// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    });

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('render events', () => {
        // Get all the events rendered in the App component
        const events = AppDOM.querySelectorAll('.event');

        // Check that each event has the 'title' class
        events.forEach((event) => {
            expect(event.querySelector('.title')).toBeInTheDocument();
        });
    });

    test('renders the NumberOfEvents component', () => {
        const numberOfEventsComponent = AppDOM.querySelector('#number-of-events');
        expect(numberOfEventsComponent).toBeInTheDocument();
      });
});