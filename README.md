This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to deploy

##### Using docker:
1. Clone repo
2. Open the project directory in the terminal
3. Copy .env file to project directory or create using .env.example
4. Run `sudo docker-compose up -d`
5. Wait for application building (2-3min)
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### Without docker:
1. Clone repo
2. Open the project directory in the terminal
3. Copy .env file to the project directory or create one using .env.example
4. Start your MongoDB (with user credentials from .env)
5. Run `npm run install && npm run start`
5. Wait for application building (2-3min)
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Available Scripts

In the project directory, you can run:

### `npm start`

Builds the client-app for production to the `build` folder.
After that runs the app in the production mode with the backend server and SSR.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start-server`

Runs the backend-app in the development mode with SSR.<br />
Open [http://localhost:3010](http://localhost:3010) to view it in the browser.

### `npm start-client`

Runs the client-app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build-client`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
