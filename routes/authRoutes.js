const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// ✅ Signup Route
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!["student", "admin", "mentor", "management"].includes(role))
            return res.status(400).json({ message: "Invalid role" });

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        user = new User({ name, email, password, role }); // 👉 plain password
        await user.save();


        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("❌ Error signing up:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

        // ✅ Create Access & Refresh Tokens
        const accessToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        );

        const refreshToken = jwt.sign(
            { id: user._id, role: user.role },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
        );

        res.status(200).json({
            message: "Login successful",
            accessToken,
            refreshToken,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

router.post("/refresh-token", async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: "No refresh token provided" });

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const newAccessToken = jwt.sign(
            { id: decoded.id, role: decoded.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        );

        res.json({ accessToken: newAccessToken });
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired refresh token" });
    }
});

module.exports = router;
