# express-winston-boilerplate

Want to create an API, but don't want to setup your files?
Use this template repository!

## What's there?

- `index.js`: Entry point of the API service; starts the service when run.
- `app.js`: The API application (which uses express). This is where you use your API routes, or send users to a 404 page.
- `routes/`: Folder which contains all your routes, organised in different files (or even subfolders).
- `controllers/`: Folder with the routing logic, organised in different files (or even subfolders).
- `config/env.config.js`: Configuration file for the environment: Specify your IP and PORT here!
- `config/winston.js`: Configuration file for logging (which uses winston). Currently uses an opinionated logging format, but can be changed as wished.

## Setting up

1. Clone the repository with your favourite git tool.
2. Install NPM packages: `npm install` or `npm i`.
3. Change your desired settings in the config folder.
4. Run the API: `npm run dev`.
