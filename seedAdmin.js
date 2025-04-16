// seedAdmin.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/admin");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await Admin.create({ email: "admin@example.com", password: hashedPassword });
    console.log("✅ Admin created");
    mongoose.disconnect();
});
