
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;

  beforeAll(async () => {
    const allEvents = await getEvents();
    EventComponent = allEvents[0];
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Event event={EventComponent} />);
  });

  test("renders event's title and short info", () => {
    const { container } = render(<Event event={EventComponent} />);
    expect(container.textContent).toContain(EventComponent.summary);
    expect(container.textContent).toContain(
      EventComponent.start.dateTime && EventComponent.start.timeZone
    );
    expect(container.textContent).toContain(
      EventComponent.summary && EventComponent.location
    );
  });

  test('renders event details button with the title (show details)', () => {
    render(<Event event={EventComponent} />); 
    // Find the button element by its role
    const buttonElement = screen.getByRole('button');
    // Assert that the button's text content is "Show details" by default
    expect(buttonElement.textContent.trim()).toBe('Show details');
  }); 

  test("collapse details by default", () => {
    // The details div should not be visible by default
    const detailsElement = screen.queryByText('About the event:');
    expect(detailsElement).not.toBeInTheDocument();
  });

  test("clicking the 'Show details' button expands the details", () => {
    const { getByText, container } = render(<Event event={EventComponent} />);
    const buttonElement = getByText('Show details');

    // The details div should not be visible before clicking the button
    expect(container.textContent).not.toContain('About the event:');

    // Click the "Show details" button
    fireEvent.click(buttonElement);

    // The details div should be visible after clicking the button
    expect(container.textContent).toContain('About the event:');
  });

  test("clicking the 'Hide details' button collapses the details again", () => {
    const { getByText, container } = render(<Event event={EventComponent} />);
    const buttonElement = getByText('Show details');

    // Click the "Show details" button
    fireEvent.click(buttonElement);

    // The details div should be visible after clicking the button
    expect(container.textContent).toContain('About the event:');

    // Click the "Hide details" button
    fireEvent.click(buttonElement);

    // The details div should not be visible after clicking the button
    expect(container.textContent).not.toContain('About the event:');
  });
});