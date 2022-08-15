# Village Shaman Doctor

This is a MERN exercise project using React framework. It aims as learning in a fun way. There might be many unreasonable settings, feel free to laugh at me.

The project aims to build a frontend and a backend website for a imaginary village shaman doctor's clinic, where villgers can book appointments with the doctors, or to buy various items from the shaman doctor.

The Frontend folder includes the frontend of the web application while the Backend folder includes the backend of the web application. 

References: <br>
https://www.youtube.com/watch?v=7CqJlxBYj-M <br>
https://www.youtube.com/watch?v=mrHNSanmqQ4

## Installation
Clone the repo to the machine:
```
git clone https://github.com/michaelcychan/village-doctor.git
```

### Backend
Run:
```
npm install
```

In Windows WSL2 / Linux:
You need to start the local mongodb server for testing service
```
sudo service mongodb start
```

To test MongoDB status:
```
sudo service postgresql status
```

To shut down MongoDB:
```
sudo service postgresql stop
```

To start the server in testing environment:
``` 
npm run start:test
```
Leave this terminal open and open another terminal:
```
npm run test
```

To start the server with online Atlas Mongodb:
```
npm run start
```

### Database schema diagram
<img src="./references/database/VillageDoctorRelationshipDiagram.jpg" height="450">
<br>


## Website homepage
<img src="./references/wireframe/village-doctor-concept-01.png" height="450">

To draw more images: https://excalidraw.com/#json=P4frf85dlG_Ak_R7SE5mq,jmYSmIqdRw9Puz-xmXkEmw

### Villager's view

Sign up and Login
<img src="./references/wireframe/village-doctor-concept-05.png" height="450">
<br>

Make booking
<img src="./references/wireframe/village-doctor-concept-02.png" height="500">
<br>

Shop
<img src="./references/wireframe/village-doctor-concept-03.png" height="500">
<br>
### Doctor's view

Sign up and Login
<img src="./references/wireframe/village-doctor-concept-04.png" height="500">
<br>

Check schedule and enter doctor's note

<br>

Replenish shop items

<br>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
