import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
  test('renders the NumberOfEvents component correctly', () => {
    const { container } = render(<NumberOfEvents 
      setCurrentNOE={() => { }} 
      setErrorAlert={() => { }}
      />);
    const NumberOfEventsComponent = container.querySelector('#number-of-events');
    expect(NumberOfEventsComponent).toBeInTheDocument();
  });

  test('contains an element with the role of the textbox', () => {
    render(<NumberOfEvents 
      setCurrentNOE={() => { }} 
      setErrorAlert={() => { }}
      />);
    const textBoxElement = screen.getByRole('textbox');
    expect(textBoxElement).toBeInTheDocument();
  });

  test('has a default input value of 32', () => {
    render(<NumberOfEvents 
      setCurrentNOE={() => { }} 
      setErrorAlert={() => { }}
      />);
    const textBoxElement = screen.getByRole('textbox');
    expect(textBoxElement.value).toBe('32');
  });

  test('changes input value when user types into it', () => {
    let numEvents = '32'; // Initialize as a string
    const handleUpdateEvents = (value) => {
      numEvents = value;
    };

    render(<NumberOfEvents 
      setCurrentNOE={handleUpdateEvents} 
      setErrorAlert={() => { }}
      />);
    const textBoxElement = screen.getByRole('textbox');

    // Trigger a change event and update the value to '10'
    fireEvent.change(textBoxElement, { target: { value: '10' } });

    // Check if the input field value has changed to '10'
    expect(textBoxElement.value).toBe('10');

    // Check if the parent component's state variable is updated to '10'
    expect(numEvents).toBe('10'); // Ensure numEvents is a string for comparison
  });
});
