# Labflow - by Jack Mayer
This project took about 7 hours to complete.


## Getting Started
`git clone`

`npm i`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

Tests currently cover:

- App.js - app starts

- tasksSlice.js - the store can be edited



### What does it do?

Labflow uses a predefined SOP (standard operating procedure) which is defined in tasksSlice.js. 
- It displays the informational sections within a modal, which can be accessed by clicking the "More Info" button.
- It displays the procedural tasks in a top-down flow. Tasks can have type "text" or "graph". Text tasks can be edited and can be marked as done.
- The app is usable for all device sizes.
- Redux is used to handle state, as it has an easy-to-use toolkit.
- Material UI is used for styling. I like simple look of Material UI and like the style-overwrite syntax.



### Future Ideas
- The user should be able to update data tables in the app.
- The user should be able to create a new task.
- The user should be able to update the informational section.
- The SOP data should live in a database.
