const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const userModel = require("../models/user.model");

// Register Route
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username) return res.status(400).json({ message: "Username is required" });
        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!password) return res.status(400).json({ message: "Password is required" });

        const hashedPass = await bcrypt.hash(password, 10);

        const user = new userModel({
            username,
            email,
            password: hashedPass
        });

        await user.save();

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Something went wrong during registration" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!password) return res.status(400).json({ message: "Password is required" });

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect email or password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Something went wrong during login" });
    }
});

module.exports = router;
