const faker = require('faker');
const { hashPassword } = require("./PasswordUtils");

function generateRandomAlphaNumeric() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generateRandomAlphabets() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;

    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const createFakeUsers = () => {

    return [...Array(1000)].map((user) => {
        const [salt, password] = hashPassword(faker.internet.password(8));
        return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: `${generateRandomAlphabets()}_${faker.internet.email()}`,
            password: password,
            salt: salt,
            username: `${faker.internet.userName()}_${generateRandomAlphaNumeric()}`,
            birthdate: faker.date.past(),
            gender: faker.random.arrayElement(['Male', 'Female', 'Other']),
            phoneNumber: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            country: faker.address.country(),
            state: faker.address.state(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode(),
            profilePicture: faker.image.avatar()
        }
    });
}

const createFakeOrders = (userIds) => {
    return [...Array(5000)].map((user) => (
        {
            productCategory: faker.commerce.department(),
            productName: faker.commerce.productName(),
            quantity: faker.datatype.number({min: 1, max: 10}),
            totalPrice: parseFloat(faker.commerce.price()),
            status: faker.random.arrayElement(['Pending', 'Shipped', 'Delivered']),
            shippingAddress: faker.address.streetAddress(),
            paymentMethod: faker.finance.transactionType(),
            rating: faker.datatype.number({min: 1, max: 5}),
            userId: userIds[Math.floor(Math.random() * userIds.length)]
        }
    ));
}

module.exports = {
    createFakeUsers,
    createFakeOrders
};