const express = require('express');
const router = express.Router();
const controller = require('../controller/Customer');

// Parse JSON request body
router.use(express.json());

// CRUD Routes /users
router.get('/', controller.getCustomers); // /users
router.get('/:userId', controller.getCustomerById); // /users/:userId

// POST route to create a new customer
router.post('/', (req, res) => {
    // Extract customer data from the request body
    const { firstname, lastname, email, password, address, phone_number } = req.body;

    // Call the createUser method from the controller to handle the creation logic
    controller.createCustomer(req, res, {
        body: {
            firstname,
            lastname,
            email,
            password,
            address,
            phone_number
        }
    });
});

router.put('/:userId', controller.updateCustomer); // /users/:userId
router.delete('/:userId', controller.deleteCustomer); // /users/:userId

module.exports = router;
