const express = require('express');
const router = express.Router();
const controller = require('../controller/Customer');
const customer = require ('../model/Customer')
const route = express.Router();

// // POST login
// route.post('/login', (req, res) => {
//     const { email, password } = req.body; // Lấy email và password từ request body
//     try {
//       // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu hay không
//       const user =  User.findOne({ where: { email: email, password: password },limit: 1 });
//       if (user) {
//         res.status(200).json({ message: 'Login successful!' });
//         console.log("login successful");
//       } else {
//         res.status(401).json({ message: 'Invalid email or password' });
//         console.log("login fail");
//       }
//     } catch (error) {
//       next(error); // Xử lý lỗi nếu có
//     }
//   });


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
