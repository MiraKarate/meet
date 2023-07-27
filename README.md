# Meet App

This is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Key Features 

## Feature 1: Filter Events by City

### User Story
As a user,  
I should be able to to filter events by city  
So that I can see the list of events that take place in that city.  

### Scenarios using the Gherkin (“Given-When-Then”) syntax

**Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities**  
**Given** user hasn’t searched for any city **When** the user opens the app **Then** the user should see a list of all upcoming events

**Scenario 2: User should see a list of suggestions when they search for a city**  
**Given** the main page is open **When** user starts typing in the city textbox **Then** the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario 3: User can select a city from the suggested list**  
**Given** the user was typing “Berlin” in the city textbox And the list of suggested cities is showing **When** the user selects a city (e.g., “Berlin, Germany”) from the list **Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the list of suggestions should disappear AND the user should receive a list of upcoming events in that city


## Feature 2: Show/Hide Event Details

### User Story
As a user,  
I should be able to show/hide event details  
So that I can see more/less information about an event.  

### Scenarios using the Gherkin (“Given-When-Then”) syntax

**Scenario 1: An event element is collapsed by default**  
**Given** the user didn't click on event details **When** the user clicks on the “Show details“ button **Then**the details of the clicked event should be seen

**Scenario 2: User can expand an event to see its details**  
**Given** the main page is open **When** I click on another event **Then** the details of the previous event should be hidden, and the details of the new event should be displayed  

**Scenraio 3: The user can collapse an event to hide its details**  
**Given** the user used the “Show details“ button **When** the user click on the “Hide details“ button **Then**  the event's details should be hidden again


## Feature 3: Specify Number of Events

### User Story
As a user,  
I should be able to specify the number of events I want to view in the app  
So that I can see more or fewer events in the events list at once.  

### Scenarios using the Gherkin (“Given-When-Then”) syntax

**Scenario 1: When user hasn’t specified a number, 32 is the default number**  
**Given** the main page is open **When** the user doesn't specify the number of events visible **Then** the default number will be 32

**Scenario 2: User can change the number of events they want to see**  
**Given** the main page is open **When** the user specifies the number of events visible **Then** the user should be able to see events equal to the given number at once

## Feature 4: Use the App When Offline.

### User Story
As a user,  
I should be able to use the app when offline  
So that I can see the events I viewed the last time I was online.  

### Scenarios using the Gherkin (“Given-When-Then”) syntax

**Scenario 1: View Previously Accessed Events Offline**  
**Given** the user has accessed the app and viewed events while online **When** he's offline and opens the app **Then** the app should display the previously accessed events that he viewed when he was last online

**Scenario 2: View Event Details Offline**  
**Given** the user has accessed the details of an event while online **When** he's offline and selects the event from the list **Then** the app should display the previously accessed event details, even when offline

**Scenario 3: Refresh Event Data when Online**  
**Given** the user has used the app offline and viewed events **When** he goes back online and opens the app **Then** the app should automatically refresh the event data and update it with any changes or new events since he was last online

## Feature 5: Add an App Shortcut to the Home Screen

### User Story
As a user,  
I should be able to add the app shortcut to my home screen  
So that I can open the app faster.  

### Scenarios using the Gherkin (“Given-When-Then”) syntax

**Scenario 1: Add App Shortcut to Home Screen**  
**Given** the user is on the app's main screen **When** he navigates to the settings or options menu AND selects "Add to Home Screen" **Then** the app shortcut should be created and added to his device's home screen

**Scenario 2: Open App via Home Screen Shortcut**  
**Given** the user has previously added the app shortcut to his device's home screen **When** he taps on the app shortcut **Then** the app should launch immediately, providing faster access

**Scenario 3: Remove App Shortcut from Home Screen**  
**Given** the user has the app shortcut on his device's home screen **When** he navigates to the settings or options menu AND he selects "Remove from Home Screen" **Then** the app shortcut should be removed from his device's home screen

## Feature 6: Display Charts Visualizing Event Details

### User Story
As a user,  
I should be able to see a chart showing the upcoming events in each city  
So that I know what events are organized in which city.  

### Scenarios using the Gherkin (“Given-When-Then”) syntax

**Scenario 1: Show a chart with the number of upcoming events in each city**  
**Given** the user has not selected a city **When** the user wants to compare events between cities **Then** they should be able to access a chart with the number of upcoming events in each city




