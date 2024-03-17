const Customer = require("../model/Customer.js");

// CRUD Controllers

// Lấy tất cả khách hàng
exports.getCustomers = (req, res, next) => {
    Customer.findAll()
        .then(customers => {
            res.status(200).json({ customers: customers });
        })
        .catch(err => console.log(err));
}

// Lấy thông tin khách hàng bằng ID
exports.getCustomerById = (req, res, next) => {
    const customerId = req.params.customerId;
    Customer.findByPk(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found!' });
            }
            res.status(200).json({ customer: customer });
        })
        .catch(err => console.log(err));
}

// Tạo mới khách hàng
exports.createCustomer = (req, res, next) => {
    const { firstname, lastname, email, password, address, phone_number } = req.body;
    Customer.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        address: address,
        phone_number: phone_number
    })
        .then(result => {
            console.log('Created Customer');
            res.status(201).json({
                message: 'Customer created successfully!',
                customer: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error creating customer!' });
        });
}

// Cập nhật thông tin khách hàng
exports.updateCustomer = (req, res, next) => {
    const customerId = req.params.customerId;
    const { firstname, lastname, email, password, address, phone_number } = req.body;
    Customer.findByPk(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found!' });
            }
            customer.firstname = firstname;
            customer.lastname = lastname;
            customer.email = email;
            customer.password = password;
            customer.address = address;
            customer.phone_number = phone_number;
            return customer.save();
        })
        .then(result => {
            res.status(200).json({message: 'Customer updated!', customer: result});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error updating customer!' });
        });
}

// Xóa khách hàng
exports.deleteCustomer = (req, res, next) => {
    const customerId = req.params.customerId;
    Customer.findByPk(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found!' });
            }
            return customer.destroy();
        })
        .then(result => {
            res.status(200).json({ message: 'Customer deleted!' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error deleting customer!' });
        });
}
