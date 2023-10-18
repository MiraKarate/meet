# Meet App

## Description

Meet App is a serverless, progressive web application (PWA) developed using React, utilizing test-driven development (TDD) techniques. It leverages the Google Calendar API to fetch upcoming events and is hosted on Amazon Web Services (AWS) using a serverless architecture.

<img width="1508" alt="meet-app" src="https://github.com/MiraKarate/meet/assets/124045048/2f1274b3-7566-46b7-b3db-7652e0dd18b8">


## Technologies & Tools Used

Meet App integrates various innovative technologies and tools, including:

- **React (with create-react-app)**: The foundation of the application, enabling dynamic and interactive user interfaces.

- **Serverless Architecture with AWS Lambda**: Backend functions and authorization are handled through AWS Lambda, emphasizing scalability and simplified maintenance.

- **Google Calendar API Integration**: Secure access to real-time event data is achieved through integration with the Google Calendar API, utilizing OAuth2 authentication.

- **TDD: Test-driven development (Jest, Testing Library/React)**: Ensuring code reliability and functionality through comprehensive testing.

- **BDD: Behavior-driven development (Jest-cucumber, Puppeteer)**: Facilitating collaboration and feature validation with behavior-driven development.

- **Continuous Integration & Continuous Delivery**: Streamlining deployment and maintaining code integrity through a CI/CD pipeline.

- **Atatus**: Effective monitoring of performance to ensure optimal user experiences.

- **Recharts**: Empowering data visualization with insightful scatterplots and engaging pie charts.

- **Git & GitHub**: Secure version control and collaborative development hosted on GitHub.



## Key Features

### Feature 1: Filter Events by City

**User Story**

As a user, I want to filter events by city to see a list of events in that specific location.

**Scenarios**

1. When the user hasn’t searched for a specific city, the app should show a list of all upcoming events.
2. The user should see a list of suggestions when they search for a city.
3. The user can select a city from the suggested list.

### Feature 2: Show/Hide Event Details

**User Story**

As a user, I want to show/hide event details to see more or less information about an event.

**Scenarios**

1. An event element is collapsed by default.
2. The user can expand an event to see its details.
3. The user can collapse an event to hide its details.

### Feature 3: Specify Number of Events

**User Story**

As a user, I want to specify the number of events I want to view in the app to see more or fewer events in the events list at once.

**Scenarios**

1. When the user hasn’t specified a number, 32 is the default.
2. The user can change the number of events they want to see.

### Feature 4: Use the App When Offline

**User Story**

As a user, I want to use the app when offline to view events I previously accessed online.

**Scenarios**

1. View previously accessed events offline.
2. View event details offline.
3. Refresh event data when online.

### Feature 5: Add an App Shortcut to the Home Screen

**User Story**

As a user, I want to add an app shortcut to my home screen to open the app faster.

**Scenarios**

1. Add app shortcut to home screen.
2. Open the app via home screen shortcut.
3. Remove app shortcut from home screen.

### Feature 6: Display Charts Visualizing Event Details

**User Story**

As a user, I want to see a chart showing the upcoming events in each city to know what events are organized in which city.

**Scenarios**

1. Show a chart with the number of upcoming events in each city.

## Installation and Usage

To set up and use the Meet App, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.

Now you're ready to run the app:

4. Set up a MongoDB database and configure the connection string in `config.js`.
5. Start the server using `npm start`.
6. Access the API endpoints using a REST client or a web browser.

Feel free to explore the app's features and interact with it.

## Contribution

Contributions to this project are welcome. You can contribute by submitting pull requests, reporting issues, or improving the codebase. Please follow the established contribution guidelines.

## License

This project is licensed under the MIT License.

Customize this README with any additional project-specific information as needed.


