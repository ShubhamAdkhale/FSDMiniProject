require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cron = require("node-cron");
dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors()); // Enable CORS

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Test Endpoint
app.post("/test", (req, res) => {
    console.log("Hit the /test endpoint!", req.body);
    res.status(200).json({ message: "Test endpoint reached!", body: req.body });
});


app.use(cors({
  origin: "http://localhost:3000",  // Allow frontend to communicate with backend
  credentials: true  // Ensure cookies or authorization headers are sent
}));


// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const sdgRoutes = require("./routes/sdgRoutes");
const poRoutes = require("./routes/poRoutes");
const peoRoutes = require("./routes/peoRoutes");
const adminRoutes = require("./routes/adminRoutes"); // Import Admin Routes
const userRoutes = require("./routes/userRoutes");

// ✅ Use Routes
app.use("/api/auth", authRoutes); // Authentication Routes
app.use("/api/internships", internshipRoutes); // Internship Routes
app.use("/api/applications", applicationRoutes); // Application Routes
app.use("/api/sdgs", sdgRoutes);
app.use("/api/po", poRoutes);
app.use("/api/peo", peoRoutes);
app.use("/api/admin", adminRoutes); // Base route for Admin APIs
app.use("/api/users", userRoutes);

// Schedule the task to run every day at 12:00 AM
cron.schedule("0 0 * * *", async () => {
  try {
      // Find all applications that are in progress
      const applications = await Application.find({ "progress.startDate": { $lte: new Date() }, "progress.endDate": { $gte: new Date() } }).populate('progress');

      // Loop through each application and update its progress
      for (const application of applications) {
          let progress = application.progress; // Assuming only one progress entry
          if (!progress) {
              continue; // Skip applications without progress data
          }
          
          const currentDate = new Date();
          const startDate = new Date(progress.startDate);
          const endDate = new Date(progress.endDate);

          // Only update if it's within the internship duration
          if (currentDate >= startDate && currentDate <= endDate) {
              // Calculate the number of days worked
              const daysWorked = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

              // Update daysSpent
              progress.daysSpent = daysWorked;
              progress.lastUpdated = currentDate;

              await progress.save(); // Save the progress document
          }
      }
      console.log("Daily progress update completed!");
  } catch (error) {
      console.error("❌ Error in cron job:", error);
  }
});


// ✅ Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));