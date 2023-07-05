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
Scenario 1: **When** user hasn't searched for a city, show upcoming events from all cities. **Given** user hasn’t searched for any city **When** the user opens the app **Then** the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city. **Given** the main page is open **When** user starts typing in the city textbox **Then** the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list. **Given** the user was typing “Berlin” in the city textbox And the list of suggested cities is showing **When** the user selects a city (e.g., “Berlin, Germany”) from the list **Then** their city should be changed to that city (i.e., “Berlin, Germany”) And the list of suggestions should disappear And the user should receive a list of upcoming events in that city
