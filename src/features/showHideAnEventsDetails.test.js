//import
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user didn\'t click on event details', () => {

        });

        when('the user is on the main page', () => {

        });

        then('the user should see only the name, time, time zone and the city of the events', () => {

        });
    });


    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventListItems;
        let showDetailsButton;
    
        given('the main page is open', () => {
          AppComponent = render(<App />);
          AppDOM = AppComponent.container.firstChild;
          EventListDOM = AppDOM.querySelector('#event-list');
        });
    
        when('the user clicks on the “Show details“ button', async () => {
          const user = userEvent.setup();
    
          // Use waitFor to ensure EventListDOM is available before accessing elements
          await waitFor(() => {
            EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
    
          showDetailsButton = within(EventListItems[0]).queryByText('Show details');
          await user.click(showDetailsButton);
        });
    
        then('the details of the clicked event should be seen', async () => {
          // Use waitFor to ensure detailedEvent is available before asserting
          await waitFor(() => {
            const detailedEvent = EventListDOM.querySelector('.details');
            expect(detailedEvent).toBeInTheDocument();
          });
        });
      });
    


      test('The user can collapse an event to hide its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventListItems;
        let showDetailsButton;
        let detailedEvent;
    
        given('the user used the “Show details“ button', async () => {
          const user = userEvent.setup();
          AppComponent = render(<App />);
          AppDOM = AppComponent.container.firstChild;
          EventListDOM = AppDOM.querySelector('#event-list');
    
          await waitFor(() => {
            EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
    
          showDetailsButton = within(EventListItems[0]).queryByText('Show details');
          await user.click(showDetailsButton);
    
          // Wait for the event details to be visible before proceeding
          await waitFor(() => {
            detailedEvent = EventListDOM.querySelector('.details');
            expect(detailedEvent).toBeInTheDocument();
          });
        });
    
        when('the user click on the “Hide details“ button', async () => {
          const user = userEvent.setup();
          const hideDetailsButton = within(EventListItems[0]).queryByText('Hide details');
          await user.click(hideDetailsButton);
    
          // Wait for the event details to be hidden before proceeding
          await waitFor(() => {
            detailedEvent = EventListDOM.querySelector('.details');
            expect(detailedEvent).not.toBeInTheDocument();
          });
        });
    
        then('the event\'s details should be hidden again', () => {
          expect(detailedEvent).not.toBeInTheDocument();
        });
      });
    });
    
    
    
    
    