## Development Environment
|Operation| Version|
|---------| -------|
|Nodejs| 14.20.1|
|npm| 6.14.17|
|react| 18.2.0|
|zustand| 4.3.9|
|axios| 1.4.0|
|json-server| 0.17.3|
|chart.js| 4.3.0|
|@mui/material| 5.13.7|

## How to Test application
### Step 1: Run `npm i` to install all packages
### Step 2: Run `npm run start:server` to start Json Server on localhost with port 3005
### Step 3: Run `npm run start` to start React Application
<code>Json Server has to be running while testing React Application</code>

## Problems solving
### Login Page
I added Login Page, the idea is that user have to login before access HomePage and MyRecordPage, if user have not logged in, that user will be pushed back to LoginPage. <br/>
On the other hand, ColumnPage does not require user logged in.<br/>
Account for login in this application:<br/>
<b>Username: test</b><br/>
<b>Password: test</b><br/>
<code>This account setting can be change in .env fil by modifying REACT_APP_USERNAME and REACT_APP_PASSWORD variables</code>
<br/>
As I used Zustand persist plugin to save logged-in state in localStorage, user only have to log-in first time unless user clear browser's cache!
### Zustand
I used <b>Zustand</b> which is a small, fast and scalable bearbones state-management solution to handle <b>State Management</b> instead of Redux

For more information: https://github.com/pmndrs/zustand

### MockAPI
Instead of mock data by importing JSON files, I used <b>Json Server</b> to create "fake server" to implement an operation function with API in order to make sure my application's UI is ready for API integration.

I also created "fake data" for testing so I do not have to call POST method to create ones

<code>"Fake data" can be found in <b>db.json</b> file and these data can be changed if necessary</code>

For more information: https://github.com/typicode/json-server
### ChartJS
To create beautiful charts on React with a lot of options for customization, I decided to use ChartJS Library

For more information: https://www.chartjs.org/

### Styled Components
In order to save time, I used <b>Material UI Library</b> for styled components. However, I just used only some of styled components, most of other components are created manually by utilized <b>TailwindCSS</b> Library to decrease development time.

For more information: 
<br/>https://mui.com/
<br/>https://tailwindcss.com/