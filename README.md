# TimartAssessment on GraphQL, Sequelize and NodeJS

This GraphQL endpoint provides functionality for managing users data and their orders.

## View Documentation

You can view the full documentation for this application [here](https://graphdoc.io/doc/45ruffAhVPU8b6vR).

The documentation provides detailed information about the API endpoints, usage instructions, and other essential resources.

### Usage

You can send GraphQL requests to the designated endpoint with appropriate query and mutation operations along with necessary variables.

## Quick Start

### Prerequisites

- Make sure you have NodeJS installed on your system. The version used on this project was `v18.18.2`. 
- Although npm comes with NodeJS, do make sure you have npm installed also. The version used on this project was `v9.8.1`.
- Create a file .env in the root directory, if it doesn't exist and insert the following information:
```bash
- DB_USERNAME=your_username
- DB_PASSWORD=your_password
- DB_DATABASE=your_database
- DB_HOST=your_sql_host
- DB_DIALECT=mysql
- PORT=4000
```

Use the package manager [npm](https://www.npmjs.com/) to install the necessary dependencies.

```bash
npm install
```

### Running the application

- You can run the application by typing one of the following commands on your preferred terminal.

```bash
npm start
npm run start
node ./src/app.js
```
- Open any GraphQL playground of your choice and go to the Url specified in the console as to where the server is running, e.g `http://localhost:4000/graphql`
- Explore the capabilities of the endpoint.
- A major concern for me is the task to grab the top ten users with the most orders placed, though it wasn't specified to create an endpoint for that, the function for getting it along
with the query is in the `UserService.js` file in the directory `src/services` with a function named `getTopTenUsersByMostOrders`.
- If you're having any issues in running the application, Please reach out to me [here](mailto:emmanuelstanley753@gmail.com).
- You can also view the hosted version [here](https://timart-assessment.onrender.com/graphql).

## Contributors
- Amadiegwu Emmanuel
