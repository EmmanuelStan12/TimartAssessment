# TimartAssessment on GraphQL, Sequelize and NodeJS

This GraphQL endpoint provides functionality for managing user data, including user creation and retrieval.

## User and Order Management with GraphQL and Sequelize

### User Entity

The User entity is a crucial component of the application, representing the users registered within the system. It consists of various attributes, including essential fields such as username, email, and password, as well as additional information such as firstName, lastName, and birthdate. The implementation ensures secure password storage by hashing the passwords before storing them in the database. The GraphQL schema provides query and mutation operations for creating and retrieving user data, ensuring seamless user management functionality.

The User entity consists of the following fields:

- `id` (ID!): The unique identifier for the user.
- `username` (String!): The username of the user.
- `email` (String!): The email address of the user.
- `password` (String!): The password of the user.
- `firstName` (String): The first name of the user.
- `lastName` (String): The last name of the user.
- `birthdate` (String): The birthdate of the user.
- `gender` (String): The gender of the user.
- `phoneNumber` (String): The phone number of the user.
- `address` (String): The address of the user.
- `country` (String): The country of the user.
- `state` (String): The state of the user.
- `city` (String): The city of the user.
- `zipCode` (String): The zip code of the user.
- `profilePicture` (String): The URL of the user's profile picture.

#### Query

- `getUserById(id: ID!)`: Retrieves a user based on the provided ID.

#### Mutation

- `createUser`: Creates a new user with the provided data. Required fields include `username`, `email`, and `password`, while other fields are optional.

### Order Entity

The Order entity facilitates the management of customer orders within the application. It includes fields such as productCategory, productName, quantity, and totalPrice, allowing for efficient tracking of customer orders. Each order is associated with a specific user, enabling the application to maintain a comprehensive record of user-specific transactions. The GraphQL schema supports the creation and retrieval of order data, providing a robust mechanism for order management and tracking.

The Order entity consists of the following fields:

- `id`: The unique identifier for the order.
- `userId`: The ID of the user associated with the order.
- `productCategory`: The category of the product in the order.
- `productName`: The name of the product in the order.
- `quantity`: The quantity of the product in the order.
- `totalPrice`: The total price of the order.
- `orderDate`: The date of the order.
- `status`: The status of the order.
- `shippingAddress`: The shipping address for the order.
- `paymentMethod`: The payment method used for the order.
- `user`: The user associated with the order.

#### Query

- `getOrdersByUserId(userId: 1, limit: 10, offset: 0)`: Retrieves orders based on the userId and also limits the orders for pagination requirement.

#### Mutation

- `createOrder`: Creates a new order with the provided data.


#### Usage

You can send GraphQL requests to the designated endpoint with appropriate query and mutation operations along with necessary variables.

## Contributors
- Amadiegwu Emmanuel
