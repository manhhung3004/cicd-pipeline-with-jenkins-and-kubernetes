const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database.js');
const User = require('./model/Customer.js');
const Customer = require('./routes/users.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// CRUD routes
app.use('/Customer', require('./routes/users'));

// GET Route để xử lý yêu cầu tới
app.get('/Customer', async (req, res, next) => {
  try {
    // Truy vấn cơ sở dữ liệu để lấy dữ liệu người dùng từ bảng users
    const users = await User.findAll(); // Giả sử User là model đại diện cho bảng users
    res.json(users); // Gửi dữ liệu về cho client dưới dạng JSON
  } catch (error) {
    next(error); // Xử lý lỗi nếu có
  }
});

// POST login
app.post('/login', async (req, res, next) => {
  const { email, password } = req.body; // Lấy email và password từ request body
  try {
    // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu hay không
    const user = await User.findOne({ where: { email: email, password: password },limit: 1 });
    console.log("Signal to here");
    if (user) {
      res.status(200).json({ message: 'Login successful!' });
      console.log("login successful");
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
      console.log("login fail");
    }
  } catch (error) {
    next(error); // Xử lý lỗi nếu có
  }
});

// Error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// Sync database
sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(5000);
  })
  .catch(err => console.log(err));

//T