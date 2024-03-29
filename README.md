# fulltimeforce-challenge

Technical challenge for FulltimeForce

This challenge requires to see the commits history of the current project, by building and API that handles the request to the GitHub API. And then show the commits on the frontend build with the desired technologies, which are the following:

- Programming Language: TypeScript
- Backend: NodeJS, Express
- Frontend: ReactJS, Bootstrap (for pre-style HTML elements), CSS Modules for styling

## How to run locally

First, make sure to clone this repository:

```bash
git clone https://github.com/NachoHotz/fulltimeforce-challenge.git
```

The, move into the development branch:

```bash
git checkout development
```

After that, create a `.env` file in the root of the `api` folder and set the following envs:

`API_PORT`

`NODE_ENV`

`CLIENT_DEV_URL`

`CLIENT_PROD_URL`

Then, head into the API folder and install the packages needed for the Backend to work. This project is built using NPM.

```bash
cd api/
```

Then, execute the following command:

```bash
npm install
```

Once the install is finished, do the same, but with the client folder for the Frontend.

```bash
cd client/
npm install
```

Once the install is finished, run the comman ```npm start``` on each folder to start the Backend and the Frontend respectably.

The backend will execute on port 3001, so you can go into <http://localhost:3001> to see it working

Once the client side has started, you will be redirected to <http://localhost:3000> to see the Frontend working.

### Deployment

If you wish to not run the app locally, head to <https://fulltimeforce-challenge.vercel.app/> to see the deployed version.
